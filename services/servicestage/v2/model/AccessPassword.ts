

export class AccessPassword {
    public name?: string;
    public user?: string;
    public password?: string;
    public constructor(name?: string, user?: string, password?: string) { 
        this['name'] = name;
        this['user'] = user;
        this['password'] = password;
    }
    public withName(name: string): AccessPassword {
        this['name'] = name;
        return this;
    }
    public withUser(user: string): AccessPassword {
        this['user'] = user;
        return this;
    }
    public withPassword(password: string): AccessPassword {
        this['password'] = password;
        return this;
    }
}