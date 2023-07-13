

export class Datastore {
    public type?: string;
    public version?: string;
    public constructor() { 
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