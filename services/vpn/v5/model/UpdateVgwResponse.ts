import { UpdateResponseVpnGateway } from './UpdateResponseVpnGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVgwResponse extends SdkResponse {
    private 'vpn_gateway'?: UpdateResponseVpnGateway;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnGateway(vpnGateway: UpdateResponseVpnGateway): UpdateVgwResponse {
        this['vpn_gateway'] = vpnGateway;
        return this;
    }
    public set vpnGateway(vpnGateway: UpdateResponseVpnGateway  | undefined) {
        this['vpn_gateway'] = vpnGateway;
    }
    public get vpnGateway(): UpdateResponseVpnGateway | undefined {
        return this['vpn_gateway'];
    }
    public withRequestId(requestId: string): UpdateVgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): UpdateVgwResponse {
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