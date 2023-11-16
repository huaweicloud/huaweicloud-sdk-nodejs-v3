

export class EngineConfigureReq {
    public version?: string;
    public constructor(version?: string) { 
        this['version'] = version;
    }
    public withVersion(version: string): EngineConfigureReq {
        this['version'] = version;
        return this;
    }
}