import { PageInfo } from './PageInfo';
import { VpnUserInGroup } from './VpnUserInGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnUsersInGroupResponse extends SdkResponse {
    public users?: Array<VpnUserInGroup>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<VpnUserInGroup>): ListVpnUsersInGroupResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListVpnUsersInGroupResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnUsersInGroupResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnUsersInGroupResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): ListVpnUsersInGroupResponse {
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