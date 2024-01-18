import { VpnGatewayCertificateConfig } from './VpnGatewayCertificateConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVgwCertificateResponse extends SdkResponse {
    public certificate?: VpnGatewayCertificateConfig;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withCertificate(certificate: VpnGatewayCertificateConfig): UpdateVgwCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withRequestId(requestId: string): UpdateVgwCertificateResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): UpdateVgwCertificateResponse {
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