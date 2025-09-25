import { ResponseP2cVgw } from './ResponseP2cVgw';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateP2cVgwResponse extends SdkResponse {
    private 'p2c_vpn_gateway'?: ResponseP2cVgw;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withP2cVpnGateway(p2cVpnGateway: ResponseP2cVgw): CreateP2cVgwResponse {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
        return this;
    }
    public set p2cVpnGateway(p2cVpnGateway: ResponseP2cVgw  | undefined) {
        this['p2c_vpn_gateway'] = p2cVpnGateway;
    }
    public get p2cVpnGateway(): ResponseP2cVgw | undefined {
        return this['p2c_vpn_gateway'];
    }
    public withRequestId(requestId: string): CreateP2cVgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateP2cVgwResponse {
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