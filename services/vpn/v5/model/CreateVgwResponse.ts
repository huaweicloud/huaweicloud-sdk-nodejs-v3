import { CreateResponseVpnGateway } from './CreateResponseVpnGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVgwResponse extends SdkResponse {
    private 'vpn_gateway'?: CreateResponseVpnGateway;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnGateway(vpnGateway: CreateResponseVpnGateway): CreateVgwResponse {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: CreateResponseVpnGateway  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): CreateResponseVpnGateway | undefined {
        return this['vpn_gateway'];
    }
    public withRequestId(requestId: string): CreateVgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateVgwResponse {
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