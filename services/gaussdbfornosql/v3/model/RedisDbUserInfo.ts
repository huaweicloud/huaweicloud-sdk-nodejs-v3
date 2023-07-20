

export class RedisDbUserInfo {
    public name?: string;
    public type?: string;
    public privilege?: string;
    public databases?: Array<string>;
    public constructor(name?: string, type?: string, privilege?: string, databases?: Array<string>) { 
        this['name'] = name;
        this['type'] = type;
        this['privilege'] = privilege;
        this['databases'] = databases;
    }
    public withName(name: string): RedisDbUserInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): RedisDbUserInfo {
        this['type'] = type;
        return this;
    }
    public withPrivilege(privilege: string): RedisDbUserInfo {
        this['privilege'] = privilege;
        return this;
    }
    public withDatabases(databases: Array<string>): RedisDbUserInfo {
        this['databases'] = databases;
        return this;
    }
}