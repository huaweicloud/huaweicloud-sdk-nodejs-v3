

export class EngineUpdateReq {
    public version: string;
    public constructor(version?: any) { 
        this['version'] = version;
    }
    public withVersion(version: string): EngineUpdateReq {
        this['version'] = version;
        return this;
    }
}