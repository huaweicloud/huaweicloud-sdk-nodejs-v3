

export class AdminUserInfoReq {
    public name?: string;
    public password?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): AdminUserInfoReq {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): AdminUserInfoReq {
        this['password'] = password;
        return this;
    }
}