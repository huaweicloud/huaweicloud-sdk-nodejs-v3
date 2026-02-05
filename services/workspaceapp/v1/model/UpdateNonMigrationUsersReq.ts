import { UpdateUserEnum } from './UpdateUserEnum';
import { UserInfo } from './UserInfo';


export class UpdateNonMigrationUsersReq {
    private 'update_type'?: UpdateUserEnum;
    private 'non_migrate_users'?: Array<UserInfo>;
    public constructor(updateType?: UpdateUserEnum, nonMigrateUsers?: Array<UserInfo>) { 
        this['update_type'] = updateType;
        this['non_migrate_users'] = nonMigrateUsers;
    }
    public withUpdateType(updateType: UpdateUserEnum): UpdateNonMigrationUsersReq {
        this['update_type'] = updateType;
        return this;
    }
    public set updateType(updateType: UpdateUserEnum  | undefined) {
        this['update_type'] = updateType;
    }
    public get updateType(): UpdateUserEnum | undefined {
        return this['update_type'];
    }
    public withNonMigrateUsers(nonMigrateUsers: Array<UserInfo>): UpdateNonMigrationUsersReq {
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