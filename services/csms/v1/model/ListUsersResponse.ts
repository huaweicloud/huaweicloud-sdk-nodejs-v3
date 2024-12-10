import { UsersDetailsResult } from './UsersDetailsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    public total?: number;
    public users?: Array<UsersDetailsResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListUsersResponse {
        this['total'] = total;
        return this;
    }
    public withUsers(users: Array<UsersDetailsResult>): ListUsersResponse {
        this['users'] = users;
        return this;
    }
}