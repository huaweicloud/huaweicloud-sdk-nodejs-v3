import { UserMigrationList } from './UserMigrationList';
import { UserMigrationRole } from './UserMigrationRole';


export class UserMigrationInfo {
    private 'is_migrate_user'?: boolean;
    private 'is_set_password'?: boolean;
    public password?: string;
    private 'user_list'?: Array<UserMigrationList>;
    private 'role_list'?: Array<UserMigrationRole>;
    public constructor(isMigrateUser?: boolean, isSetPassword?: boolean) { 
        this['is_migrate_user'] = isMigrateUser;
        this['is_set_password'] = isSetPassword;
    }
    public withIsMigrateUser(isMigrateUser: boolean): UserMigrationInfo {
        this['is_migrate_user'] = isMigrateUser;
        return this;
    }
    public set isMigrateUser(isMigrateUser: boolean  | undefined) {
        this['is_migrate_user'] = isMigrateUser;
    }
    public get isMigrateUser(): boolean | undefined {
        return this['is_migrate_user'];
    }
    public withIsSetPassword(isSetPassword: boolean): UserMigrationInfo {
        this['is_set_password'] = isSetPassword;
        return this;
    }
    public set isSetPassword(isSetPassword: boolean  | undefined) {
        this['is_set_password'] = isSetPassword;
    }
    public get isSetPassword(): boolean | undefined {
        return this['is_set_password'];
    }
    public withPassword(password: string): UserMigrationInfo {
        this['password'] = password;
        return this;
    }
    public withUserList(userList: Array<UserMigrationList>): UserMigrationInfo {
        this['user_list'] = userList;
        return this;
    }
    public set userList(userList: Array<UserMigrationList>  | undefined) {
        this['user_list'] = userList;
    }
    public get userList(): Array<UserMigrationList> | undefined {
        return this['user_list'];
    }
    public withRoleList(roleList: Array<UserMigrationRole>): UserMigrationInfo {
        this['role_list'] = roleList;
        return this;
    }
    public set roleList(roleList: Array<UserMigrationRole>  | undefined) {
        this['role_list'] = roleList;
    }
    public get roleList(): Array<UserMigrationRole> | undefined {
        return this['role_list'];
    }
}