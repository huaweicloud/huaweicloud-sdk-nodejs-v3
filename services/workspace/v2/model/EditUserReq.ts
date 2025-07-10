

export class EditUserReq {
    public description?: string;
    private 'user_email'?: string;
    private 'user_phone'?: string;
    private 'active_type'?: EditUserReqActiveTypeEnum | string;
    private 'account_expires'?: string;
    private 'enable_change_password'?: boolean;
    private 'next_login_change_password'?: boolean;
    private 'password_never_expired'?: boolean;
    public disabled?: boolean;
    private 'user_info_map'?: string;
    public constructor() { 
    }
    public withDescription(description: string): EditUserReq {
        this['description'] = description;
        return this;
    }
    public withUserEmail(userEmail: string): EditUserReq {
        this['user_email'] = userEmail;
        return this;
    }
    public set userEmail(userEmail: string  | undefined) {
        this['user_email'] = userEmail;
    }
    public get userEmail(): string | undefined {
        return this['user_email'];
    }
    public withUserPhone(userPhone: string): EditUserReq {
        this['user_phone'] = userPhone;
        return this;
    }
    public set userPhone(userPhone: string  | undefined) {
        this['user_phone'] = userPhone;
    }
    public get userPhone(): string | undefined {
        return this['user_phone'];
    }
    public withActiveType(activeType: EditUserReqActiveTypeEnum | string): EditUserReq {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: EditUserReqActiveTypeEnum | string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): EditUserReqActiveTypeEnum | string | undefined {
        return this['active_type'];
    }
    public withAccountExpires(accountExpires: string): EditUserReq {
        this['account_expires'] = accountExpires;
        return this;
    }
    public set accountExpires(accountExpires: string  | undefined) {
        this['account_expires'] = accountExpires;
    }
    public get accountExpires(): string | undefined {
        return this['account_expires'];
    }
    public withEnableChangePassword(enableChangePassword: boolean): EditUserReq {
        this['enable_change_password'] = enableChangePassword;
        return this;
    }
    public set enableChangePassword(enableChangePassword: boolean  | undefined) {
        this['enable_change_password'] = enableChangePassword;
    }
    public get enableChangePassword(): boolean | undefined {
        return this['enable_change_password'];
    }
    public withNextLoginChangePassword(nextLoginChangePassword: boolean): EditUserReq {
        this['next_login_change_password'] = nextLoginChangePassword;
        return this;
    }
    public set nextLoginChangePassword(nextLoginChangePassword: boolean  | undefined) {
        this['next_login_change_password'] = nextLoginChangePassword;
    }
    public get nextLoginChangePassword(): boolean | undefined {
        return this['next_login_change_password'];
    }
    public withPasswordNeverExpired(passwordNeverExpired: boolean): EditUserReq {
        this['password_never_expired'] = passwordNeverExpired;
        return this;
    }
    public set passwordNeverExpired(passwordNeverExpired: boolean  | undefined) {
        this['password_never_expired'] = passwordNeverExpired;
    }
    public get passwordNeverExpired(): boolean | undefined {
        return this['password_never_expired'];
    }
    public withDisabled(disabled: boolean): EditUserReq {
        this['disabled'] = disabled;
        return this;
    }
    public withUserInfoMap(userInfoMap: string): EditUserReq {
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
export enum EditUserReqActiveTypeEnum {
    USER_ACTIVATE = 'USER_ACTIVATE',
    ADMIN_ACTIVATE = 'ADMIN_ACTIVATE'
}
