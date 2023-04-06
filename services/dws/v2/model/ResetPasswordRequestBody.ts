

export class ResetPasswordRequestBody {
    private 'new_password': string | undefined;
    public constructor(newPassword?: any) { 
        this['new_password'] = newPassword;
    }
    public withNewPassword(newPassword: string): ResetPasswordRequestBody {
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