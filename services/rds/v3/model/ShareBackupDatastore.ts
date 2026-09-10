

export class ShareBackupDatastore {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): ShareBackupDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ShareBackupDatastore {
        this['version'] = version;
        return this;
    }
}