

export class ResetPasswordReq {
    public newpassword?: string;
    public constructor(newpassword?: string) { 
        this['newpassword'] = newpassword;
    }
    public withNewpassword(newpassword: string): ResetPasswordReq {
        this['newpassword'] = newpassword;
        return this;
    }
}