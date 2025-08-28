

export class WeakPasswordReq {
    public password?: string;
    public constructor(password?: string) { 
        this['password'] = password;
    }
    public withPassword(password: string): WeakPasswordReq {
        this['password'] = password;
        return this;
    }
}