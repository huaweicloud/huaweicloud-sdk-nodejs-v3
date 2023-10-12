

export class PostgresqlHbaConf {
    public type?: string;
    public database?: string;
    public user?: string;
    public address?: string;
    public mask?: string;
    public method?: string;
    public priority?: number;
    public constructor(type?: string, database?: string, user?: string, address?: string, method?: string, priority?: number) { 
        this['type'] = type;
        this['database'] = database;
        this['user'] = user;
        this['address'] = address;
        this['method'] = method;
        this['priority'] = priority;
    }
    public withType(type: string): PostgresqlHbaConf {
        this['type'] = type;
        return this;
    }
    public withDatabase(database: string): PostgresqlHbaConf {
        this['database'] = database;
        return this;
    }
    public withUser(user: string): PostgresqlHbaConf {
        this['user'] = user;
        return this;
    }
    public withAddress(address: string): PostgresqlHbaConf {
        this['address'] = address;
        return this;
    }
    public withMask(mask: string): PostgresqlHbaConf {
        this['mask'] = mask;
        return this;
    }
    public withMethod(method: string): PostgresqlHbaConf {
        this['method'] = method;
        return this;
    }
    public withPriority(priority: number): PostgresqlHbaConf {
        this['priority'] = priority;
        return this;
    }
}