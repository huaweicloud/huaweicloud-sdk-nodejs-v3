

export class SqlserverUserForCreation {
    public name?: string;
    public password?: string;
    public constructor(name?: string, password?: string) { 
        this['name'] = name;
        this['password'] = password;
    }
    public withName(name: string): SqlserverUserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): SqlserverUserForCreation {
        this['password'] = password;
        return this;
    }
}