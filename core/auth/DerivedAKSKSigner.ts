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

import moment from 'moment';
import url from 'url';
import { IHttpRequest } from '../http/IHttpRequest';
import * as _ from 'lodash';
import { HKDF } from './HKDF';
import { BaseCredentials } from './BaseCredentials';
import { AKSKSigner } from './AKSKSigner';

export class DerivedAKSKSigner extends AKSKSigner {
    private static V_11_HMAC_SHA_256 = 'V11-HMAC-SHA256';
  
    public static sign(request: IHttpRequest, credential: BaseCredentials) {      
        const authenticationHeaders = {};
        let dateTimeStamp = request.headers[this.HeaderXDate];
        if (dateTimeStamp) {
            dateTimeStamp = moment(dateTimeStamp).utcOffset(0).format(this.BasicDateFormat);
            dateTimeStamp = `${dateTimeStamp}Z`;
        }
        else {
            dateTimeStamp = moment().utcOffset(0).format(this.BasicDateFormat);
            dateTimeStamp = `${dateTimeStamp}Z`;
            Object.assign(authenticationHeaders, { 'X-Sdk-Date': dateTimeStamp });
        }
        const parsedUrl = url.parse(request.endpoint, true);

        let host = parsedUrl.host;
        const reqUrlHostAndPort = request.headers[this.HeaderHost];
        if (reqUrlHostAndPort) {
            host = reqUrlHostAndPort;
        }
        Object.assign(authenticationHeaders, { host: host });

        const allHeaders = {};
        const current_headers: any = {};
        Object.assign(current_headers, request.headers);
        if (current_headers['content-type']?.indexOf('multipart/form-data') !== -1) {
            delete current_headers['content-type'];
        }
        Object.assign(allHeaders, current_headers, authenticationHeaders);
        const canonicalURI = this.CanonicalURI(parsedUrl.pathname ?? '');
        const canonicalQueryString = this.CanonicalQueryString(request);

        const sortedKeys = _.sortBy(Object.keys(allHeaders), (x: string) => {
            return x.toLocaleLowerCase();
        });
        const signedHeaderNames = sortedKeys.join(';').toLocaleLowerCase();
        const canonicalHeaders = this.buildCanonicalHeaders(allHeaders);
        const payloadHash = this.buildPayloadHash(request);

        const canonicalRequest = this.buildCanonicalRequest(request.method, canonicalURI, canonicalQueryString, 
            canonicalHeaders, signedHeaderNames, payloadHash);
 
        const canonicalRequestHash = this.Hex(canonicalRequest);

        const dateStr = dateTimeStamp.substring(0, 8);
        const info = `${dateStr}/${(credential).getRegionId()}/${credential.getDerivedAuthServiceName()}`;
        const stringToSign = this.getStringToSignByInfo(this.V_11_HMAC_SHA_256, dateTimeStamp, info, canonicalRequestHash);
        const derivationKey = HKDF.getDerKeySHA256(credential.getAk(), credential.getSk(), info) ?? '';
        const signatureString = this.hmacSHA256(derivationKey, stringToSign);

        const authorization = {
            Authorization: `${this.V_11_HMAC_SHA_256} Credential=${credential.getAk()}/${info}, SignedHeaders=${signedHeaderNames}, Signature=${signatureString}`,
        };

        Object.assign(allHeaders, authorization);
        return allHeaders;
    }

    private static getStringToSignByInfo(sdkSigningHash: string, dateTimeStamp: string, info: string, canonicalRequestHash: string) {
        const arr = [sdkSigningHash, dateTimeStamp, info, canonicalRequestHash];
        return arr.join('\n');
    }
}