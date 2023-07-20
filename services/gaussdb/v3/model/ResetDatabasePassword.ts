

export class ResetDatabasePassword {
    public name?: string;
    public host?: string;
    public password?: string;
    public constructor(name?: string, host?: string, password?: string) { 
        this['name'] = name;
        this['host'] = host;
        this['password'] = password;
    }
    public withName(name: string): ResetDatabasePassword {
        this['name'] = name;
        return this;
    }
    public withHost(host: string): ResetDatabasePassword {
        this['host'] = host;
        return this;
    }
    public withPassword(password: string): ResetDatabasePassword {
        this['password'] = password;
        return this;
    }
}