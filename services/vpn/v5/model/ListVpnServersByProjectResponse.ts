import { PageInfo } from './PageInfo';
import { ShowServerResponse } from './ShowServerResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnServersByProjectResponse extends SdkResponse {
    private 'vpn_servers'?: Array<ShowServerResponse>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnServers(vpnServers: Array<ShowServerResponse>): ListVpnServersByProjectResponse {
        this['vpn_servers'] = vpnServers;
        return this;
    }
    public set vpnServers(vpnServers: Array<ShowServerResponse>  | undefined) {
        this['vpn_servers'] = vpnServers;
    }
    public get vpnServers(): Array<ShowServerResponse> | undefined {
        return this['vpn_servers'];
    }
    public withTotalCount(totalCount: number): ListVpnServersByProjectResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnServersByProjectResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnServersByProjectResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListVpnServersByProjectResponse {
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