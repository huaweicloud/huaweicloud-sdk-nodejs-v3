import { User } from './User';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    private 'total_count'?: number;
    public users?: Array<User>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withUsers(users: Array<User>): ListUsersResponse {
        this['users'] = users;
        return this;
    }
}