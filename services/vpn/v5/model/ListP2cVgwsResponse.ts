import { ShowResponseP2cVgw } from './ShowResponseP2cVgw';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListP2cVgwsResponse extends SdkResponse {
    private 'p2c_vpn_gateways'?: Array<ShowResponseP2cVgw>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withP2cVpnGateways(p2cVpnGateways: Array<ShowResponseP2cVgw>): ListP2cVgwsResponse {
        this['p2c_vpn_gateways'] = p2cVpnGateways;
        return this;
    }
    public set p2cVpnGateways(p2cVpnGateways: Array<ShowResponseP2cVgw>  | undefined) {
        this['p2c_vpn_gateways'] = p2cVpnGateways;
    }
    public get p2cVpnGateways(): Array<ShowResponseP2cVgw> | undefined {
        return this['p2c_vpn_gateways'];
    }
    public withRequestId(requestId: string): ListP2cVgwsResponse {
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