

export class Datastore {
    public version?: string;
    public type?: string;
    public constructor(version?: string, type?: string) { 
        this['version'] = version;
        this['type'] = type;
    }
    public withVersion(version: string): Datastore {
        this['version'] = version;
        return this;
    }
    public withType(type: string): Datastore {
        this['type'] = type;
        return this;
    }
}