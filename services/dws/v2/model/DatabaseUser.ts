

export class DatabaseUser {
    public name?: string;
    public login?: boolean;
    public constructor() { 
    }
    public withName(name: string): DatabaseUser {
        this['name'] = name;
        return this;
    }
    public withLogin(login: boolean): DatabaseUser {
        this['login'] = login;
        return this;
    }
}