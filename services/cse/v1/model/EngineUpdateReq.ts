

export class EngineUpdateReq {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): EngineUpdateReq {
        this['version'] = version;
        return this;
    }
}