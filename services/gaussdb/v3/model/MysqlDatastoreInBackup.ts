

export class MysqlDatastoreInBackup {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): MysqlDatastoreInBackup {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): MysqlDatastoreInBackup {
        this['version'] = version;
        return this;
    }
}