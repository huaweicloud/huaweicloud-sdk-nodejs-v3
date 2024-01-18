import { VpnGatewayCertificate } from './VpnGatewayCertificate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpnGatewayCertificateResponse extends SdkResponse {
    public certificate?: VpnGatewayCertificate;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCertificate(certificate: VpnGatewayCertificate): ShowVpnGatewayCertificateResponse {
        this['certificate'] = certificate;
        return this;
    }
    public withRequestId(requestId: string): ShowVpnGatewayCertificateResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}