

export class ResetServerPasswordOption {
    private 'new_password'?: string;
    private 'is_check_password'?: boolean;
    public constructor(newPassword?: string) { 
        this['new_password'] = newPassword;
    }
    public withNewPassword(newPassword: string): ResetServerPasswordOption {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
    public withIsCheckPassword(isCheckPassword: boolean): ResetServerPasswordOption {
        this['is_check_password'] = isCheckPassword;
        return this;
    }
    public set isCheckPassword(isCheckPassword: boolean  | undefined) {
        this['is_check_password'] = isCheckPassword;
    }
    public get isCheckPassword(): boolean | undefined {
        return this['is_check_password'];
    }
}