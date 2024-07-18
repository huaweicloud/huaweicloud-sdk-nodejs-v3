import { PageInfo } from './PageInfo';
import { VpnUserGroup } from './VpnUserGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpnUserGroupsResponse extends SdkResponse {
    private 'user_groups'?: Array<VpnUserGroup>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withUserGroups(userGroups: Array<VpnUserGroup>): ListVpnUserGroupsResponse {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: Array<VpnUserGroup>  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): Array<VpnUserGroup> | undefined {
        return this['user_groups'];
    }
    public withTotalCount(totalCount: number): ListVpnUserGroupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpnUserGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpnUserGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}