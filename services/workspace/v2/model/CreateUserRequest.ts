

export class CreateUserRequest {
    private 'user_name'?: string;
    private 'user_email'?: string;
    private 'account_expires'?: string;
    private 'active_type'?: CreateUserRequestActiveTypeEnum | string;
    private 'user_phone'?: string;
    public password?: string;
    private 'enable_change_password'?: boolean;
    private 'next_login_change_password'?: boolean;
    private 'group_ids'?: Array<string>;
    public description?: string;
    private 'alias_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'user_info_map'?: string;
    public constructor(userName?: string) { 
        this['user_name'] = userName;
    }
    public withUserName(userName: string): CreateUserRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserEmail(userEmail: string): CreateUserRequest {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withAccountExpires(accountExpires: string): CreateUserRequest {
        this['account_expires'] = accountExpires;
        return this;
    }
    public set accountExpires(accountExpires: string  | undefined) {
        this['account_expires'] = accountExpires;
    }
    public get accountExpires(): string | undefined {
        return this['account_expires'];
    }
    public withActiveType(activeType: CreateUserRequestActiveTypeEnum | string): CreateUserRequest {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: CreateUserRequestActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): CreateUserRequestActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withUserPhone(userPhone: string): CreateUserRequest {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withPassword(password: string): CreateUserRequest {
        this['password'] = password;
        return this;
    }
    public withEnableChangePassword(enableChangePassword: boolean): CreateUserRequest {
        this['enable_change_password'] = enableChangePassword;
        return this;
    }
    public set enableChangePassword(enableChangePassword: boolean  | undefined) {
        this['enable_change_password'] = enableChangePassword;
    }
    public get enableChangePassword(): boolean | undefined {
        return this['enable_change_password'];
    }
    public withNextLoginChangePassword(nextLoginChangePassword: boolean): CreateUserRequest {
        this['next_login_change_password'] = nextLoginChangePassword;
        return this;
    }
    public set nextLoginChangePassword(nextLoginChangePassword: boolean  | undefined) {
        this['next_login_change_password'] = nextLoginChangePassword;
    }
    public get nextLoginChangePassword(): boolean | undefined {
        return this['next_login_change_password'];
    }
    public withGroupIds(groupIds: Array<string>): CreateUserRequest {
        this['group_ids'] = groupIds;
        return this;
    }
    public set groupIds(groupIds: Array<string>  | undefined) {
        this['group_ids'] = groupIds;
    }
    public get groupIds(): Array<string> | undefined {
        return this['group_ids'];
    }
    public withDescription(description: string): CreateUserRequest {
        this['description'] = description;
        return this;
    }
    public withAliasName(aliasName: string): CreateUserRequest {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateUserRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserInfoMap(userInfoMap: string): CreateUserRequest {
        this['user_info_map'] = userInfoMap;
        return this;
    }
    public set userInfoMap(userInfoMap: string  | undefined) {
        this['user_info_map'] = userInfoMap;
    }
    public get userInfoMap(): string | undefined {
        return this['user_info_map'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateUserRequestActiveTypeEnum {
    USER_ACTIVATE = 'USER_ACTIVATE',
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE'
}
