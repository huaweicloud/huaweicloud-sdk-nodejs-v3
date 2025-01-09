

export class UserDetail {
    public description?: string;
    public id?: string;
    private 'user_name'?: string;
    private 'user_email'?: string;
    private 'user_phone'?: string;
    private 'active_type'?: UserDetailActiveTypeEnum | string;
    private 'object_sid'?: string;
    private 'sam_account_name'?: string;
    private 'user_principal_name'?: string;
    private 'full_name'?: string;
    private 'distinguished_name'?: string;
    private 'account_type'?: number;
    private 'when_created'?: string;
    private 'account_expires'?: number;
    private 'is_pre_user'?: boolean;
    private 'user_expired'?: boolean;
    public locked?: boolean;
    private 'enable_change_password'?: boolean;
    private 'password_never_expired'?: boolean;
    private 'next_login_change_password'?: boolean;
    public disabled?: boolean;
    private 'group_names'?: Array<string>;
    private 'share_space_subscription'?: boolean;
    private 'share_space_desktops'?: number;
    private 'total_desktops'?: number;
    public constructor() { 
    }
    public withDescription(description: string): UserDetail {
        this['description'] = description;
        return this;
    }
    public withId(id: string): UserDetail {
        this['id'] = id;
        return this;
    }
    public withUserName(userName: string): UserDetail {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserEmail(userEmail: string): UserDetail {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withUserPhone(userPhone: string): UserDetail {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withActiveType(activeType: UserDetailActiveTypeEnum | string): UserDetail {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: UserDetailActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): UserDetailActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withObjectSid(objectSid: string): UserDetail {
        this['object_sid'] = objectSid;
        return this;
    }
    public set objectSid(objectSid: string  | undefined) {
        this['object_sid'] = objectSid;
    }
    public get objectSid(): string | undefined {
        return this['object_sid'];
    }
    public withSamAccountName(samAccountName: string): UserDetail {
        this['sam_account_name'] = samAccountName;
        return this;
    }
    public set samAccountName(samAccountName: string  | undefined) {
        this['sam_account_name'] = samAccountName;
    }
    public get samAccountName(): string | undefined {
        return this['sam_account_name'];
    }
    public withUserPrincipalName(userPrincipalName: string): UserDetail {
        this['user_principal_name'] = userPrincipalName;
        return this;
    }
    public set userPrincipalName(userPrincipalName: string  | undefined) {
        this['user_principal_name'] = userPrincipalName;
    }
    public get userPrincipalName(): string | undefined {
        return this['user_principal_name'];
    }
    public withFullName(fullName: string): UserDetail {
        this['full_name'] = fullName;
        return this;
    }
    public set fullName(fullName: string  | undefined) {
        this['full_name'] = fullName;
    }
    public get fullName(): string | undefined {
        return this['full_name'];
    }
    public withDistinguishedName(distinguishedName: string): UserDetail {
        this['distinguished_name'] = distinguishedName;
        return this;
    }
    public set distinguishedName(distinguishedName: string  | undefined) {
        this['distinguished_name'] = distinguishedName;
    }
    public get distinguishedName(): string | undefined {
        return this['distinguished_name'];
    }
    public withAccountType(accountType: number): UserDetail {
        this['account_type'] = accountType;
        return this;
    }
    public set accountType(accountType: number  | undefined) {
        this['account_type'] = accountType;
    }
    public get accountType(): number | undefined {
        return this['account_type'];
    }
    public withWhenCreated(whenCreated: string): UserDetail {
        this['when_created'] = whenCreated;
        return this;
    }
    public set whenCreated(whenCreated: string  | undefined) {
        this['when_created'] = whenCreated;
    }
    public get whenCreated(): string | undefined {
        return this['when_created'];
    }
    public withAccountExpires(accountExpires: number): UserDetail {
        this['account_expires'] = accountExpires;
        return this;
    }
    public set accountExpires(accountExpires: number  | undefined) {
        this['account_expires'] = accountExpires;
    }
    public get accountExpires(): number | undefined {
        return this['account_expires'];
    }
    public withIsPreUser(isPreUser: boolean): UserDetail {
        this['is_pre_user'] = isPreUser;
        return this;
    }
    public set isPreUser(isPreUser: boolean  | undefined) {
        this['is_pre_user'] = isPreUser;
    }
    public get isPreUser(): boolean | undefined {
        return this['is_pre_user'];
    }
    public withUserExpired(userExpired: boolean): UserDetail {
        this['user_expired'] = userExpired;
        return this;
    }
    public set userExpired(userExpired: boolean  | undefined) {
        this['user_expired'] = userExpired;
    }
    public get userExpired(): boolean | undefined {
        return this['user_expired'];
    }
    public withLocked(locked: boolean): UserDetail {
        this['locked'] = locked;
        return this;
    }
    public withEnableChangePassword(enableChangePassword: boolean): UserDetail {
        this['enable_change_password'] = enableChangePassword;
        return this;
    }
    public set enableChangePassword(enableChangePassword: boolean  | undefined) {
        this['enable_change_password'] = enableChangePassword;
    }
    public get enableChangePassword(): boolean | undefined {
        return this['enable_change_password'];
    }
    public withPasswordNeverExpired(passwordNeverExpired: boolean): UserDetail {
        this['password_never_expired'] = passwordNeverExpired;
        return this;
    }
    public set passwordNeverExpired(passwordNeverExpired: boolean  | undefined) {
        this['password_never_expired'] = passwordNeverExpired;
    }
    public get passwordNeverExpired(): boolean | undefined {
        return this['password_never_expired'];
    }
    public withNextLoginChangePassword(nextLoginChangePassword: boolean): UserDetail {
        this['next_login_change_password'] = nextLoginChangePassword;
        return this;
    }
    public set nextLoginChangePassword(nextLoginChangePassword: boolean  | undefined) {
        this['next_login_change_password'] = nextLoginChangePassword;
    }
    public get nextLoginChangePassword(): boolean | undefined {
        return this['next_login_change_password'];
    }
    public withDisabled(disabled: boolean): UserDetail {
        this['disabled'] = disabled;
        return this;
    }
    public withGroupNames(groupNames: Array<string>): UserDetail {
        this['group_names'] = groupNames;
        return this;
    }
    public set groupNames(groupNames: Array<string>  | undefined) {
        this['group_names'] = groupNames;
    }
    public get groupNames(): Array<string> | undefined {
        return this['group_names'];
    }
    public withShareSpaceSubscription(shareSpaceSubscription: boolean): UserDetail {
        this['share_space_subscription'] = shareSpaceSubscription;
        return this;
    }
    public set shareSpaceSubscription(shareSpaceSubscription: boolean  | undefined) {
        this['share_space_subscription'] = shareSpaceSubscription;
    }
    public get shareSpaceSubscription(): boolean | undefined {
        return this['share_space_subscription'];
    }
    public withShareSpaceDesktops(shareSpaceDesktops: number): UserDetail {
        this['share_space_desktops'] = shareSpaceDesktops;
        return this;
    }
    public set shareSpaceDesktops(shareSpaceDesktops: number  | undefined) {
        this['share_space_desktops'] = shareSpaceDesktops;
    }
    public get shareSpaceDesktops(): number | undefined {
        return this['share_space_desktops'];
    }
    public withTotalDesktops(totalDesktops: number): UserDetail {
        this['total_desktops'] = totalDesktops;
        return this;
    }
    public set totalDesktops(totalDesktops: number  | undefined) {
        this['total_desktops'] = totalDesktops;
    }
    public get totalDesktops(): number | undefined {
        return this['total_desktops'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserDetailActiveTypeEnum {
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE',
    USER_ACTIVATE = 'USER_ACTIVATE'
}
