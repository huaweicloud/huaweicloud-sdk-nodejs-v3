

export class RedisUserForCreation {
    public name?: string;
    public password?: string;
    public databases?: Array<string>;
    public privilege?: string;
    public constructor(name?: string, password?: string, databases?: Array<string>, privilege?: string) { 
        this['name'] = name;
        this['password'] = password;
        this['databases'] = databases;
        this['privilege'] = privilege;
    }
    public withName(name: string): RedisUserForCreation {
        this['name'] = name;
        return this;
    }
    public withPassword(password: string): RedisUserForCreation {
        this['password'] = password;
        return this;
    }
    public withDatabases(databases: Array<string>): RedisUserForCreation {
        this['databases'] = databases;
        return this;
    }
    public withPrivilege(privilege: string): RedisUserForCreation {
        this['privilege'] = privilege;
        return this;
    }
}