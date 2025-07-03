

export class SyncResourceReq {
    public provider?: string;
    public type?: string;
    public constructor() { 
    }
    public withProvider(provider: string): SyncResourceReq {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): SyncResourceReq {
        this['type'] = type;
        return this;
    }
}