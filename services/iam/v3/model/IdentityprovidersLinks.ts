

export class IdentityprovidersLinks {
    public self?: string;
    public protocols?: string;
    public constructor(self?: string, protocols?: string) { 
        this['self'] = self;
        this['protocols'] = protocols;
    }
    public withSelf(self: string): IdentityprovidersLinks {
        this['self'] = self;
        return this;
    }
    public withProtocols(protocols: string): IdentityprovidersLinks {
        this['protocols'] = protocols;
        return this;
    }
}