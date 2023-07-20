

export class Datastore {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): Datastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): Datastore {
        this['version'] = version;
        return this;
    }
}