

export class ResetServerPasswordOption {
    private 'new_password': string | undefined;
    private 'is_check_password'?: boolean | undefined;
    public constructor(newPassword?: any) { 
        this['new_password'] = newPassword;
    }
    public withNewPassword(newPassword: string): ResetServerPasswordOption {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword() {
        return this['new_password'];
    }
    public withIsCheckPassword(isCheckPassword: boolean): ResetServerPasswordOption {
        this['is_check_password'] = isCheckPassword;
        return this;
    }
    public set isCheckPassword(isCheckPassword: boolean | undefined) {
        this['is_check_password'] = isCheckPassword;
    }
    public get isCheckPassword() {
        return this['is_check_password'];
    }
}