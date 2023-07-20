

export class RedisModifyDbUserPrivilegeRequestBody {
    public name?: string;
    public privilege?: string;
    public databases?: Array<string>;
    public constructor(name?: string, privilege?: string) { 
        this['name'] = name;
        this['privilege'] = privilege;
    }
    public withName(name: string): RedisModifyDbUserPrivilegeRequestBody {
        this['name'] = name;
        return this;
    }
    public withPrivilege(privilege: string): RedisModifyDbUserPrivilegeRequestBody {
        this['privilege'] = privilege;
        return this;
    }
    public withDatabases(databases: Array<string>): RedisModifyDbUserPrivilegeRequestBody {
        this['databases'] = databases;
        return this;
    }
}