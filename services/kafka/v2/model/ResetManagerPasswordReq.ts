

export class ResetManagerPasswordReq {
    private 'new_password'?: string | undefined;
    public constructor() { 
    }
    public withNewPassword(newPassword: string): ResetManagerPasswordReq {
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