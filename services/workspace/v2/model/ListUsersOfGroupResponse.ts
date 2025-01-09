import { UserInGroup } from './UserInGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersOfGroupResponse extends SdkResponse {
    public users?: Array<UserInGroup>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserInGroup>): ListUsersOfGroupResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListUsersOfGroupResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}