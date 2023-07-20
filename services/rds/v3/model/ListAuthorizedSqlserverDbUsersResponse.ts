import { UserWithPrivilege } from './UserWithPrivilege';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthorizedSqlserverDbUsersResponse extends SdkResponse {
    public users?: Array<UserWithPrivilege>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<UserWithPrivilege>): ListAuthorizedSqlserverDbUsersResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListAuthorizedSqlserverDbUsersResponse {
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