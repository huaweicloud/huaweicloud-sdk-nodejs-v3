

export class ListDatastore {
    public type?: string;
    public version?: string;
    public constructor(type?: string, version?: string) { 
        this['type'] = type;
        this['version'] = version;
    }
    public withType(type: string): ListDatastore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ListDatastore {
        this['version'] = version;
        return this;
    }
}