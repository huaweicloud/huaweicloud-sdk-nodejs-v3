

export class ShowWebHookConfigRequest {
    public corpId?: string;
    public spId?: string;
    public constructor() { 
    }
    public withCorpId(corpId: string): ShowWebHookConfigRequest {
        this['corpId'] = corpId;
        return this;
    }
    public withSpId(spId: string): ShowWebHookConfigRequest {
        this['spId'] = spId;
        return this;
    }
}