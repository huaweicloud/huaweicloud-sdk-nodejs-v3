

export class CompatibleDataStoreResp {
    public type?: string;
    public version?: string;
    public constructor() { 
    }
    public withType(type: string): CompatibleDataStoreResp {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): CompatibleDataStoreResp {
        this['version'] = version;
        return this;
    }
}