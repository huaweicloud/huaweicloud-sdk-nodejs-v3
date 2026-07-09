

export class DbDataStore {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): DbDataStore {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): DbDataStore {
        this['version'] = version;
        return this;
    }
}