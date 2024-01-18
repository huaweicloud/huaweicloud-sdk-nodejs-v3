import { ResponseVpnGateway } from './ResponseVpnGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVgwsResponse extends SdkResponse {
    private 'vpn_gateways'?: Array<ResponseVpnGateway>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpnGateways(vpnGateways: Array<ResponseVpnGateway>): ListVgwsResponse {
        this['vpn_gateways'] = vpnGateways;
        return this;
    }
    public set vpnGateways(vpnGateways: Array<ResponseVpnGateway>  | undefined) {
        this['vpn_gateways'] = vpnGateways;
    }
    public get vpnGateways(): Array<ResponseVpnGateway> | undefined {
        return this['vpn_gateways'];
    }
    public withRequestId(requestId: string): ListVgwsResponse {
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