

export class QueryInstanceBackupResponseBodyDatastore {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): QueryInstanceBackupResponseBodyDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): QueryInstanceBackupResponseBodyDatastore {
        this['version'] = version;
        return this;
    }
}