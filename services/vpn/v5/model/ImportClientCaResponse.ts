import { ImportClientCaCertificateResponseBodyClientCaCertificate } from './ImportClientCaCertificateResponseBodyClientCaCertificate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportClientCaResponse extends SdkResponse {
    private 'client_ca_certificate'?: ImportClientCaCertificateResponseBodyClientCaCertificate;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withClientCaCertificate(clientCaCertificate: ImportClientCaCertificateResponseBodyClientCaCertificate): ImportClientCaResponse {
        this['client_ca_certificate'] = clientCaCertificate;
        return this;
    }
    public set clientCaCertificate(clientCaCertificate: ImportClientCaCertificateResponseBodyClientCaCertificate  | undefined) {
        this['client_ca_certificate'] = clientCaCertificate;
    }
    public get clientCaCertificate(): ImportClientCaCertificateResponseBodyClientCaCertificate | undefined {
        return this['client_ca_certificate'];
    }
    public withRequestId(requestId: string): ImportClientCaResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ImportClientCaResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}