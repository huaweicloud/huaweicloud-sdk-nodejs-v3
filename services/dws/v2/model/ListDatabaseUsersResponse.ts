import { DatabaseUser } from './DatabaseUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUsersResponse extends SdkResponse {
    public users?: Array<DatabaseUser>;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<DatabaseUser>): ListDatabaseUsersResponse {
        this['users'] = users;
        return this;
    }
}