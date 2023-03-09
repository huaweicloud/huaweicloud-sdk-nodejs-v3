/*
 * Copyright 2020 Huawei Technologies Co.,Ltd.
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as crypto from "crypto";
import moment from 'moment';
import url from "url";
import { IHttpRequest } from "../http/IHttpRequest";
import * as _ from "lodash";
import { ICredential } from "./ICredential";

export class AKSKSigner {
    private static EMPTY_BODY_SHA256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    private static SDK_SIGNING_ALGORITHM = "SDK-HMAC-SHA256";
    private static BasicDateFormat = "YYYYMMDDTHHmmss";
    private static HeaderXDate = "X-Sdk-Date";
    private static HeaderHost = "host";
    private static HeaderContentSha256 = "X-Sdk-Content-Sha256";

    private static hex: string[] = [];
    private static hexTable(): string[] {
        if (this.hex.length <= 0) {
            for (let i = 0; i < 256; ++i) {
                this.hex[i] = '%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase();
            }
        }
        return this.hex;
    }
    private static noEscape: number[] = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 0 - 15
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, // 16 - 31
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, // 32 - 47
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, // 48 - 63
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 64 - 79
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, // 80 - 95
        0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, // 96 - 111
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0  // 112 - 127
    ];

    public static sign(request: IHttpRequest, credential: ICredential) {
        const authenticationHeaders = {};
        let dateTimeStamp = request.headers[this.HeaderXDate];
        if (dateTimeStamp) {
            dateTimeStamp = moment(dateTimeStamp).utcOffset(0).format(this.BasicDateFormat);
            dateTimeStamp = dateTimeStamp + "Z";
        }
        else {
            dateTimeStamp = moment().utcOffset(0).format(this.BasicDateFormat);
            dateTimeStamp = dateTimeStamp + "Z";
            Object.assign(authenticationHeaders, { "X-Sdk-Date": dateTimeStamp })
        }
        // @ts-ignore
        const parsedUrl = url.parse(request.endpoint, true);

        let host = parsedUrl.host;
        const reqUrlHostAndPort = request.headers[this.HeaderHost];
        if (reqUrlHostAndPort) {
            host = reqUrlHostAndPort;
        }
        Object.assign(authenticationHeaders, { "host": host });

        const allHeaders = {};
        const current_headers: any = {};
        Object.assign(current_headers, request.headers);
        if (current_headers['content-type']?.indexOf('multipart/form-data') !== -1) {
            delete current_headers['content-type'];
        }
        Object.assign(allHeaders, current_headers, authenticationHeaders);
        const canonicalURI = this.CanonicalURI(parsedUrl.pathname!);
        const canonicalQueryString = this.CanonicalQueryString(request);

        const sortedKeys = _.sortBy(Object.keys(allHeaders), (x: string) => {
            return x.toLocaleLowerCase();
        });
        const signedHeaderNames = sortedKeys.join(";").toLocaleLowerCase();
        const canonicalHeaders = this.buildCanonicalHeaders(allHeaders);
        const payloadHash = this.buildPayloadHash(request);

        const canonicalRequest = this.buildCanonicalRequest(request.method, canonicalURI, canonicalQueryString, canonicalHeaders, signedHeaderNames, payloadHash);
 
        const canonicalRequestHash = this.Hex(canonicalRequest);
        const stringToSign = this.getStringToSign(this.SDK_SIGNING_ALGORITHM, dateTimeStamp, canonicalRequestHash);
        const signatureString = this.hmacSHA256(credential.getSk(), stringToSign);

        const authorization = {
            Authorization: `${this.SDK_SIGNING_ALGORITHM} Access=${credential.getAk()}, SignedHeaders=${signedHeaderNames}, Signature=${signatureString}`
        };

        Object.assign(allHeaders, authorization);
        return allHeaders;
    }

    private static CanonicalURI(inputUri?: string) {
        if (!inputUri) {
            return inputUri;
        }
        const uriList = inputUri.split('/');
        const uri = [];
        for (let i = 0; i < uriList.length; i++) {
            const uriValue = uriList[i];
            uri.push(this.urlEncode(uriValue));
        }
        let urlpath = uri.join('/');
        if (urlpath[urlpath.length - 1] !== '/') {
            urlpath = urlpath + '/'
        }
        return urlpath;
    }

    private static Hex = (str: string) => {
        return crypto
            .createHash("sha256")
            .update(str)
            .digest("hex");
    };


    private static hmacSHA256 = (secretKey: string | undefined, str: string) => {
        return crypto
            // @ts-ignore
            .createHmac("sha256", secretKey)
            .update(str)
            .digest("hex");
    };

    private static getStringToSign(sdkSigningHash: string, dateTimeStamp: string, canonicalRequestHash: string) {
        const arr = [sdkSigningHash, dateTimeStamp, canonicalRequestHash];

        return arr.join("\n");
    }

    // eslint-disable-next-line max-params
    private static buildCanonicalRequest(method: string | undefined, canonicalURI: string | undefined, canonicalQueryString: string, canonicalHeaders: string, signedHeaderNames: string, payloadHash: string | undefined) {
        const arr = [method, canonicalURI, canonicalQueryString, canonicalHeaders, signedHeaderNames, payloadHash];

        return arr.join("\n");
    }

    private static buildPayloadHash(request: IHttpRequest) {
        if (request.headers[this.HeaderContentSha256]) {
            return request.headers[this.HeaderContentSha256];
        }
        if (request.data) {
            return this.Hex(JSON.stringify(request.data));
        }
        return this.EMPTY_BODY_SHA256;
    }

    private static buildCanonicalHeaders(allHeaders: any) {
        const headers = Object.keys(allHeaders).map(key => ({ key, value: allHeaders[key] }));
        headers.sort((a, b) => a.key.toLocaleLowerCase().localeCompare(b.key.toLocaleLowerCase()));
        let canonicalHeaders = "";
        for (let i = 0; i < headers.length; i++) {
            const lowerKey = headers[i].key.toLocaleLowerCase();
            canonicalHeaders += `${lowerKey}:${headers[i].value}\n`;
        }
        return canonicalHeaders;
    }

    private static CanonicalQueryString(r: any) {
        const keys = Object.keys(r.queryParams);
        keys.sort();
        const a = [];
        for (let i = 0; i < keys.length; i++) {
            const key = this.urlEncode(keys[i]);
            const value = r.queryParams[keys[i]];
            if (Array.isArray(value)) {
                value.sort();
                for (let j = 0; j < value.length; j++) {
                    a.push(key + '=' + this.urlEncode(value[j]))
                }
            } else {
                a.push(key + '=' + this.urlEncode(value))
            }
        }
        return a.join('&');
    }

    private static urlEncode(str: any) {
        if (typeof str !== 'string') {
            if (typeof str === 'object')
                str = String(str);
            else
                str += '';
        }
        let out = '';
        let lastPos = 0;

        for (let i = 0; i < str.length; ++i) {
            let c = str.charCodeAt(i);

            // ASCII
            if (c < 0x80) {
                if (this.noEscape[c] === 1)
                    continue;
                if (lastPos < i)
                    out += str.slice(lastPos, i);
                lastPos = i + 1;
                out += this.hexTable()[c];
                continue;
            }

            if (lastPos < i)
                out += str.slice(lastPos, i);

            // Multi-byte characters ...
            if (c < 0x800) {
                lastPos = i + 1;
                out += this.hexTable()[0xC0 | (c >> 6)] + this.hexTable()[0x80 | (c & 0x3F)];
                continue;
            }
            if (c < 0xD800 || c >= 0xE000) {
                lastPos = i + 1;
                out += this.hexTable()[0xE0 | (c >> 12)] +
                    this.hexTable()[0x80 | ((c >> 6) & 0x3F)] +
                    this.hexTable()[0x80 | (c & 0x3F)];
                continue;
            }
            // Surrogate pair
            ++i;

            if (i >= str.length)
                throw new RequiredError('ERR_INVALID_URI');

            const c2 = str.charCodeAt(i) & 0x3FF;

            lastPos = i + 1;
            c = 0x10000 + (((c & 0x3FF) << 10) | c2);
            out += this.hexTable()[0xF0 | (c >> 18)] +
                this.hexTable()[0x80 | ((c >> 12) & 0x3F)] +
                this.hexTable()[0x80 | ((c >> 6) & 0x3F)] +
                this.hexTable()[0x80 | (c & 0x3F)];
        }
        if (lastPos === 0)
            return str;
        if (lastPos < str.length)
            return out + str.slice(lastPos);
        return out;
    }
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}