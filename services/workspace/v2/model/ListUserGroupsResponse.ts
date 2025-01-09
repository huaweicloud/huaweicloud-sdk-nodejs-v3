import { UserGroupInfo } from './UserGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserGroupsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'user_groups'?: Array<UserGroupInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListUserGroupsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUserGroups(userGroups: Array<UserGroupInfo>): ListUserGroupsResponse {
        this['user_groups'] = userGroups;
        return this;
    }
    public set userGroups(userGroups: Array<UserGroupInfo>  | undefined) {
        this['user_groups'] = userGroups;
    }
    public get userGroups(): Array<UserGroupInfo> | undefined {
        return this['user_groups'];
    }
}