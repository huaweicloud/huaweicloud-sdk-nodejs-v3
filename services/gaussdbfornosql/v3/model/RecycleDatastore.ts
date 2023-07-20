

export class RecycleDatastore {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): RecycleDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): RecycleDatastore {
        this['version'] = version;
        return this;
    }
}