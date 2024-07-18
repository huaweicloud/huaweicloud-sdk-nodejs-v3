

export class ResetVpnUserPasswordRequestBody {
    private 'new_password'?: string;
    public constructor(newPassword?: string) { 
        this['new_password'] = newPassword;
    }
    public withNewPassword(newPassword: string): ResetVpnUserPasswordRequestBody {
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