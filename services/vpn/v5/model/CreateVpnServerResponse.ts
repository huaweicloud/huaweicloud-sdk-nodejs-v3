import { CreateServerResponseBodyVpnServer } from './CreateServerResponseBodyVpnServer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpnServerResponse extends SdkResponse {
    private 'vpn_server'?: CreateServerResponseBodyVpnServer;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnServer(vpnServer: CreateServerResponseBodyVpnServer): CreateVpnServerResponse {
        this['vpn_server'] = vpnServer;
        return this;
    }
    public set vpnServer(vpnServer: CreateServerResponseBodyVpnServer  | undefined) {
        this['vpn_server'] = vpnServer;
    }
    public get vpnServer(): CreateServerResponseBodyVpnServer | undefined {
        return this['vpn_server'];
    }
    public withRequestId(requestId: string): CreateVpnServerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateVpnServerResponse {
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