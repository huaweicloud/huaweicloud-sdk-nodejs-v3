

export class VerifyCodeCheckDTO {
    public user?: string;
    public code?: string;
    public constructor(user?: string, code?: string) { 
        this['user'] = user;
        this['code'] = code;
    }
    public withUser(user: string): VerifyCodeCheckDTO {
        this['user'] = user;
        return this;
    }
    public withCode(code: string): VerifyCodeCheckDTO {
        this['code'] = code;
        return this;
    }
}