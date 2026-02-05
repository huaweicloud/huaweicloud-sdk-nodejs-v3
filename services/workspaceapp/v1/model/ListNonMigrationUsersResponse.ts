import { UserInfo } from './UserInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNonMigrationUsersResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'non_migrate_users'?: Array<UserInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListNonMigrationUsersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withNonMigrateUsers(nonMigrateUsers: Array<UserInfo>): ListNonMigrationUsersResponse {
        this['non_migrate_users'] = nonMigrateUsers;
        return this;
    }
    public set nonMigrateUsers(nonMigrateUsers: Array<UserInfo>  | undefined) {
        this['non_migrate_users'] = nonMigrateUsers;
    }
    public get nonMigrateUsers(): Array<UserInfo> | undefined {
        return this['non_migrate_users'];
    }
}