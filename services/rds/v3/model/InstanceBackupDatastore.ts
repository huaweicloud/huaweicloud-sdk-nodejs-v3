

export class InstanceBackupDatastore {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): InstanceBackupDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): InstanceBackupDatastore {
        this['version'] = version;
        return this;
    }
}