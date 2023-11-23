

export class EngineConfigureReq {
    public authType?: string;
    public constructor(authType?: string) { 
        this['authType'] = authType;
    }
    public withAuthType(authType: string): EngineConfigureReq {
        this['authType'] = authType;
        return this;
    }
}