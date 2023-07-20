import { ListGaussMySqlDatabaseUser } from './ListGaussMySqlDatabaseUser';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlDatabaseUserResponse extends SdkResponse {
    public users?: Array<ListGaussMySqlDatabaseUser>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: Array<ListGaussMySqlDatabaseUser>): ListGaussMySqlDatabaseUserResponse {
        this['users'] = users;
        return this;
    }
    public withTotalCount(totalCount: number): ListGaussMySqlDatabaseUserResponse {
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