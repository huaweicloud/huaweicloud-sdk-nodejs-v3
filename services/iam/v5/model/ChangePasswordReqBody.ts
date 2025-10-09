

export class ChangePasswordReqBody {
    private 'new_password'?: string;
    private 'old_password'?: string;
    public constructor(newPassword?: string, oldPassword?: string) { 
        this['new_password'] = newPassword;
        this['old_password'] = oldPassword;
    }
    public withNewPassword(newPassword: string): ChangePasswordReqBody {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string  | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword(): string | undefined {
        return this['new_password'];
    }
    public withOldPassword(oldPassword: string): ChangePasswordReqBody {
        this['old_password'] = oldPassword;
        return this;
    }
    public set oldPassword(oldPassword: string  | undefined) {
        this['old_password'] = oldPassword;
    }
    public get oldPassword(): string | undefined {
        return this['old_password'];
    }
}