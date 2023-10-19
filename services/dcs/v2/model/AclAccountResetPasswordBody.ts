

export class AclAccountResetPasswordBody {
    private 'old_password'?: string;
    private 'new_password'?: string;
    public constructor() { 
    }
    public withOldPassword(oldPassword: string): AclAccountResetPasswordBody {
        this['old_password'] = oldPassword;
        return this;
    }
    public set oldPassword(oldPassword: string  | undefined) {
        this['old_password'] = oldPassword;
    }
    public get oldPassword(): string | undefined {
        return this['old_password'];
    }
    public withNewPassword(newPassword: string): AclAccountResetPasswordBody {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
}