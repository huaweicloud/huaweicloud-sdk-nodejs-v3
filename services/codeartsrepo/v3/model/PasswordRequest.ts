

export class PasswordRequest {
    public pwd?: string;
    public constructor(pwd?: string) { 
        this['pwd'] = pwd;
    }
    public withPwd(pwd: string): PasswordRequest {
        this['pwd'] = pwd;
        return this;
    }
}