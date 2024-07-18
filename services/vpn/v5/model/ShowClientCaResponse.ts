import { QueryClientCaCertificateBody } from './QueryClientCaCertificateBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClientCaResponse extends SdkResponse {
    private 'client_ca_certificate'?: QueryClientCaCertificateBody;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withClientCaCertificate(clientCaCertificate: QueryClientCaCertificateBody): ShowClientCaResponse {
        this['client_ca_certificate'] = clientCaCertificate;
        return this;
    }
    public set clientCaCertificate(clientCaCertificate: QueryClientCaCertificateBody  | undefined) {
        this['client_ca_certificate'] = clientCaCertificate;
    }
    public get clientCaCertificate(): QueryClientCaCertificateBody | undefined {
        return this['client_ca_certificate'];
    }
    public withRequestId(requestId: string): ShowClientCaResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ShowClientCaResponse {
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