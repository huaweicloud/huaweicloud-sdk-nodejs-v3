import { UserAccountVO } from './UserAccountVO';
import { UserRoleVO } from './UserRoleVO';


export class UpdateUserReq {
    private 'job_id': string | undefined;
    public password?: string;
    public list?: Array<UserAccountVO>;
    private 'user_roles'?: Array<UserRoleVO> | undefined;
    private 'is_set_password': boolean | undefined;
    private 'is_migrate_user': boolean | undefined;
    private 'is_sync_object_privilege'?: boolean | undefined;
    public constructor(jobId?: any, isSetPassword?: any, isMigrateUser?: any) { 
        this['job_id'] = jobId;
        this['is_set_password'] = isSetPassword;
        this['is_migrate_user'] = isMigrateUser;
    }
    public withJobId(jobId: string): UpdateUserReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withPassword(password: string): UpdateUserReq {
        this['password'] = password;
        return this;
    }
    public withList(list: Array<UserAccountVO>): UpdateUserReq {
        this['list'] = list;
        return this;
    }
    public withUserRoles(userRoles: Array<UserRoleVO>): UpdateUserReq {
        this['user_roles'] = userRoles;
        return this;
    }
    public set userRoles(userRoles: Array<UserRoleVO> | undefined) {
        this['user_roles'] = userRoles;
    }
    public get userRoles() {
        return this['user_roles'];
    }
    public withIsSetPassword(isSetPassword: boolean): UpdateUserReq {
        this['is_set_password'] = isSetPassword;
        return this;
    }
    public set isSetPassword(isSetPassword: boolean | undefined) {
        this['is_set_password'] = isSetPassword;
    }
    public get isSetPassword() {
        return this['is_set_password'];
    }
    public withIsMigrateUser(isMigrateUser: boolean): UpdateUserReq {
        this['is_migrate_user'] = isMigrateUser;
        return this;
    }
    public set isMigrateUser(isMigrateUser: boolean | undefined) {
        this['is_migrate_user'] = isMigrateUser;
    }
    public get isMigrateUser() {
        return this['is_migrate_user'];
    }
    public withIsSyncObjectPrivilege(isSyncObjectPrivilege: boolean): UpdateUserReq {
        this['is_sync_object_privilege'] = isSyncObjectPrivilege;
        return this;
    }
    public set isSyncObjectPrivilege(isSyncObjectPrivilege: boolean | undefined) {
        this['is_sync_object_privilege'] = isSyncObjectPrivilege;
    }
    public get isSyncObjectPrivilege() {
        return this['is_sync_object_privilege'];
    }
}