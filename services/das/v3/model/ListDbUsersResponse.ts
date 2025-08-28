import { DbUser } from './DbUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDbUsersResponse extends SdkResponse {
    public total?: number;
    private 'db_users'?: Array<DbUser>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListDbUsersResponse {
        this['total'] = total;
        return this;
    }
    public withDbUsers(dbUsers: Array<DbUser>): ListDbUsersResponse {
        this['db_users'] = dbUsers;
        return this;
    }
    public set dbUsers(dbUsers: Array<DbUser>  | undefined) {
        this['db_users'] = dbUsers;
    }
    public get dbUsers(): Array<DbUser> | undefined {
        return this['db_users'];
    }
}