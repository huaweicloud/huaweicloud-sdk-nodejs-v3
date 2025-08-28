

export class ResetUserPasswordReq {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): ResetUserPasswordReq {
        this['password'] = password;
        return this;
    }
}