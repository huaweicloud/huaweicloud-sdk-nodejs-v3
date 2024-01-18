import { CreateResponseVpnConnection } from './CreateResponseVpnConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpnConnectionResponse extends SdkResponse {
    private 'vpn_connection'?: CreateResponseVpnConnection;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnConnection(vpnConnection: CreateResponseVpnConnection): CreateVpnConnectionResponse {
        this['vpn_connection'] = vpnConnection;
        return this;
    }
    public set vpnConnection(vpnConnection: CreateResponseVpnConnection  | undefined) {
        this['vpn_connection'] = vpnConnection;
    }
    public get vpnConnection(): CreateResponseVpnConnection | undefined {
        return this['vpn_connection'];
    }
    public withRequestId(requestId: string): CreateVpnConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateVpnConnectionResponse {
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