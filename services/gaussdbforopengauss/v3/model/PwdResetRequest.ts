

export class PwdResetRequest {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): PwdResetRequest {
        this['password'] = password;
        return this;
    }
}