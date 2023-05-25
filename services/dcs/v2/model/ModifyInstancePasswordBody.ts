

export class ModifyInstancePasswordBody {
    private 'old_password': string | undefined;
    private 'new_password': string | undefined;
    public constructor(oldPassword?: any, newPassword?: any) { 
        this['old_password'] = oldPassword;
        this['new_password'] = newPassword;
    }
    public withOldPassword(oldPassword: string): ModifyInstancePasswordBody {
        this['old_password'] = oldPassword;
        return this;
    }
    public set oldPassword(oldPassword: string | undefined) {
        this['old_password'] = oldPassword;
    }
    public get oldPassword() {
        return this['old_password'];
    }
    public withNewPassword(newPassword: string): ModifyInstancePasswordBody {
        this['new_password'] = newPassword;
        return this;
    }
    public set newPassword(newPassword: string | undefined) {
        this['new_password'] = newPassword;
    }
    public get newPassword() {
        return this['new_password'];
    }
}