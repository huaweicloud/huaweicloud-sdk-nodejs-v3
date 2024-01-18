import { UpdateResponseVpnConnection } from './UpdateResponseVpnConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVpnConnectionResponse extends SdkResponse {
    private 'vpn_connection'?: UpdateResponseVpnConnection;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnConnection(vpnConnection: UpdateResponseVpnConnection): UpdateVpnConnectionResponse {
        this['vpn_connection'] = vpnConnection;
        return this;
    }
    public set vpnConnection(vpnConnection: UpdateResponseVpnConnection  | undefined) {
        this['vpn_connection'] = vpnConnection;
    }
    public get vpnConnection(): UpdateResponseVpnConnection | undefined {
        return this['vpn_connection'];
    }
    public withRequestId(requestId: string): UpdateVpnConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): UpdateVpnConnectionResponse {
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