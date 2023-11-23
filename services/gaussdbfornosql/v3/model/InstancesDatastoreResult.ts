

export class InstancesDatastoreResult {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): InstancesDatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): InstancesDatastoreResult {
        this['version'] = version;
        return this;
    }
}