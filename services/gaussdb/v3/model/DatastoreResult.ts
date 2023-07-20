

export class DatastoreResult {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): DatastoreResult {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DatastoreResult {
        this['version'] = version;
        return this;
    }
}