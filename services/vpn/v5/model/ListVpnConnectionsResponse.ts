import { PageInfo } from './PageInfo';
import { ResponseVpnConnection } from './ResponseVpnConnection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnConnectionsResponse extends SdkResponse {
    private 'vpn_connections'?: Array<ResponseVpnConnection>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    private 'total_count'?: number;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withVpnConnections(vpnConnections: Array<ResponseVpnConnection>): ListVpnConnectionsResponse {
        this['vpn_connections'] = vpnConnections;
        return this;
    }
    public set vpnConnections(vpnConnections: Array<ResponseVpnConnection>  | undefined) {
        this['vpn_connections'] = vpnConnections;
    }
    public get vpnConnections(): Array<ResponseVpnConnection> | undefined {
        return this['vpn_connections'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnConnectionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnConnectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotalCount(totalCount: number): ListVpnConnectionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListVpnConnectionsResponse {
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