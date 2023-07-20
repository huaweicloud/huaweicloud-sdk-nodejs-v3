

export class DbUserPwdRequest {
    public name?: string;
    public password?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): DbUserPwdRequest {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): DbUserPwdRequest {
        this['password'] = password;
        return this;
    }
}