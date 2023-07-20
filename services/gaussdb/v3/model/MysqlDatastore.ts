

export class MysqlDatastore {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): MysqlDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): MysqlDatastore {
        this['version'] = version;
        return this;
    }
}