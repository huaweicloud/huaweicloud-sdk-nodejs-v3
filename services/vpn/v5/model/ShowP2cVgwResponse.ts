import { ShowResponseP2cVgw } from './ShowResponseP2cVgw';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowP2cVgwResponse extends SdkResponse {
    private 'p2c_vpn_gateway'?: ShowResponseP2cVgw;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withP2cVpnGateway(p2cVpnGateway: ShowResponseP2cVgw): ShowP2cVgwResponse {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
        return this;
    }
    public set p2cVpnGateway(p2cVpnGateway: ShowResponseP2cVgw  | undefined) {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public get p2cVpnGateway(): ShowResponseP2cVgw | undefined {
        return this['p2c_vpn_gateway'];
    }
    public withRequestId(requestId: string): ShowP2cVgwResponse {
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