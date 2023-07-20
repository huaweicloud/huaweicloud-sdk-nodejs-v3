

export class ModifyInstancePasswordBody {
    private 'old_password'?: string;
    private 'new_password'?: string;
    public constructor(oldPassword?: string, newPassword?: string) { 
        this['old_password'] = oldPassword;
        this['new_password'] = newPassword;
    }
    public withOldPassword(oldPassword: string): ModifyInstancePasswordBody {
        this['old_password'] = oldPassword;
        return this;
    }
    public set oldPassword(oldPassword: string  | undefined) {
        this['old_password'] = oldPassword;
    }
    public get oldPassword(): string | undefined {
        return this['old_password'];
    }
    public withNewPassword(newPassword: string): ModifyInstancePasswordBody {
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