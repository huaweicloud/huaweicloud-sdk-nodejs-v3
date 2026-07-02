import { VpnGatewayCertificate } from './VpnGatewayCertificate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnGatewayCertificatesResponse extends SdkResponse {
    private 'vpn_gateway_certificates'?: Array<VpnGatewayCertificate>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpnGatewayCertificates(vpnGatewayCertificates: Array<VpnGatewayCertificate>): ListVpnGatewayCertificatesResponse {
        this['vpn_gateway_certificates'] = vpnGatewayCertificates;
        return this;
    }
    public set vpnGatewayCertificates(vpnGatewayCertificates: Array<VpnGatewayCertificate>  | undefined) {
        this['vpn_gateway_certificates'] = vpnGatewayCertificates;
    }
    public get vpnGatewayCertificates(): Array<VpnGatewayCertificate> | undefined {
        return this['vpn_gateway_certificates'];
    }
    public withRequestId(requestId: string): ListVpnGatewayCertificatesResponse {
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