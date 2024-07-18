import { ShowServerResponse } from './ShowServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnServersByVgwResponse extends SdkResponse {
    private 'vpn_servers'?: Array<ShowServerResponse>;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnServers(vpnServers: Array<ShowServerResponse>): ListVpnServersByVgwResponse {
        this['vpn_servers'] = vpnServers;
        return this;
    }
    public set vpnServers(vpnServers: Array<ShowServerResponse>  | undefined) {
        this['vpn_servers'] = vpnServers;
    }
    public get vpnServers(): Array<ShowServerResponse> | undefined {
        return this['vpn_servers'];
    }
    public withRequestId(requestId: string): ListVpnServersByVgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListVpnServersByVgwResponse {
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