

export class ConfigMigrationInstanceBody {
    public id?: string;
    public addrs?: string;
    public password?: string;
    public constructor() { 
    }
    public withId(id: string): ConfigMigrationInstanceBody {
        this['id'] = id;
        return this;
    }
    public withAddrs(addrs: string): ConfigMigrationInstanceBody {
        this['addrs'] = addrs;
        return this;
    }
    public withPassword(password: string): ConfigMigrationInstanceBody {
        this['password'] = password;
        return this;
    }
}