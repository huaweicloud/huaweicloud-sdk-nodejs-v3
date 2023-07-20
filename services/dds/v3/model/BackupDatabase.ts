

export class BackupDatabase {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): BackupDatabase {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): BackupDatabase {
        this['version'] = version;
        return this;
    }
}