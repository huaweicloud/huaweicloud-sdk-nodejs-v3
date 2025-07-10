

export class User {
    public id?: string;
    public sid?: string;
    private 'user_name'?: string;
    private 'user_email'?: string;
    private 'total_desktops'?: number;
    private 'user_phone'?: string;
    private 'active_type'?: UserActiveTypeEnum | string;
    private 'is_pre_user'?: boolean;
    private 'account_expires'?: string;
    private 'password_never_expired'?: boolean;
    private 'account_expired'?: boolean;
    private 'enable_change_password'?: boolean;
    private 'next_login_change_password'?: boolean;
    public description?: string;
    public locked?: boolean;
    public disabled?: boolean;
    private 'share_space_subscription'?: boolean;
    private 'share_space_desktops'?: number;
    private 'group_names'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'user_info_map'?: string;
    public constructor() { 
    }
    public withId(id: string): User {
        this['id'] = id;
        return this;
    }
    public withSid(sid: string): User {
        this['sid'] = sid;
        return this;
    }
    public withUserName(userName: string): User {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserEmail(userEmail: string): User {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withTotalDesktops(totalDesktops: number): User {
        this['total_desktops'] = totalDesktops;
        return this;
    }
    public set totalDesktops(totalDesktops: number  | undefined) {
        this['total_desktops'] = totalDesktops;
    }
    public get totalDesktops(): number | undefined {
        return this['total_desktops'];
    }
    public withUserPhone(userPhone: string): User {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withActiveType(activeType: UserActiveTypeEnum | string): User {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: UserActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): UserActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withIsPreUser(isPreUser: boolean): User {
        this['is_pre_user'] = isPreUser;
        return this;
    }
    public set isPreUser(isPreUser: boolean  | undefined) {
        this['is_pre_user'] = isPreUser;
    }
    public get isPreUser(): boolean | undefined {
        return this['is_pre_user'];
    }
    public withAccountExpires(accountExpires: string): User {
        this['account_expires'] = accountExpires;
        return this;
    }
    public set accountExpires(accountExpires: string  | undefined) {
        this['account_expires'] = accountExpires;
    }
    public get accountExpires(): string | undefined {
        return this['account_expires'];
    }
    public withPasswordNeverExpired(passwordNeverExpired: boolean): User {
        this['password_never_expired'] = passwordNeverExpired;
        return this;
    }
    public set passwordNeverExpired(passwordNeverExpired: boolean  | undefined) {
        this['password_never_expired'] = passwordNeverExpired;
    }
    public get passwordNeverExpired(): boolean | undefined {
        return this['password_never_expired'];
    }
    public withAccountExpired(accountExpired: boolean): User {
        this['account_expired'] = accountExpired;
        return this;
    }
    public set accountExpired(accountExpired: boolean  | undefined) {
        this['account_expired'] = accountExpired;
    }
    public get accountExpired(): boolean | undefined {
        return this['account_expired'];
    }
    public withEnableChangePassword(enableChangePassword: boolean): User {
        this['enable_change_password'] = enableChangePassword;
        return this;
    }
    public set enableChangePassword(enableChangePassword: boolean  | undefined) {
        this['enable_change_password'] = enableChangePassword;
    }
    public get enableChangePassword(): boolean | undefined {
        return this['enable_change_password'];
    }
    public withNextLoginChangePassword(nextLoginChangePassword: boolean): User {
        this['next_login_change_password'] = nextLoginChangePassword;
        return this;
    }
    public set nextLoginChangePassword(nextLoginChangePassword: boolean  | undefined) {
        this['next_login_change_password'] = nextLoginChangePassword;
    }
    public get nextLoginChangePassword(): boolean | undefined {
        return this['next_login_change_password'];
    }
    public withDescription(description: string): User {
        this['description'] = description;
        return this;
    }
    public withLocked(locked: boolean): User {
        this['locked'] = locked;
        return this;
    }
    public withDisabled(disabled: boolean): User {
        this['disabled'] = disabled;
        return this;
    }
    public withShareSpaceSubscription(shareSpaceSubscription: boolean): User {
        this['share_space_subscription'] = shareSpaceSubscription;
        return this;
    }
    public set shareSpaceSubscription(shareSpaceSubscription: boolean  | undefined) {
        this['share_space_subscription'] = shareSpaceSubscription;
    }
    public get shareSpaceSubscription(): boolean | undefined {
        return this['share_space_subscription'];
    }
    public withShareSpaceDesktops(shareSpaceDesktops: number): User {
        this['share_space_desktops'] = shareSpaceDesktops;
        return this;
    }
    public set shareSpaceDesktops(shareSpaceDesktops: number  | undefined) {
        this['share_space_desktops'] = shareSpaceDesktops;
    }
    public get shareSpaceDesktops(): number | undefined {
        return this['share_space_desktops'];
    }
    public withGroupNames(groupNames: Array<string>): User {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: Array<string>  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): Array<string> | undefined {
        return this['group_names'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): User {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserInfoMap(userInfoMap: string): User {
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
export enum UserActiveTypeEnum {
    USER_ACTIVATE = 'USER_ACTIVATE',
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE'
}
