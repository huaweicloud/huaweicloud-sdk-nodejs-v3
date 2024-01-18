import { ResponseVpnConnection } from './ResponseVpnConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpnConnectionResponse extends SdkResponse {
    private 'vpn_connection'?: ResponseVpnConnection;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnConnection(vpnConnection: ResponseVpnConnection): ShowVpnConnectionResponse {
        this['vpn_connection'] = vpnConnection;
        return this;
    }
    public set vpnConnection(vpnConnection: ResponseVpnConnection  | undefined) {
        this['vpn_connection'] = vpnConnection;
    }
    public get vpnConnection(): ResponseVpnConnection | undefined {
        return this['vpn_connection'];
    }
    public withRequestId(requestId: string): ShowVpnConnectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ShowVpnConnectionResponse {
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