

export class ProtocolLinks {
    private 'identity_provider'?: string;
    public self?: string;
    public constructor(identityProvider?: string, self?: string) { 
        this['identity_provider'] = identityProvider;
        this['self'] = self;
    }
    public withIdentityProvider(identityProvider: string): ProtocolLinks {
        this['identity_provider'] = identityProvider;
        return this;
    }
    public set identityProvider(identityProvider: string  | undefined) {
        this['identity_provider'] = identityProvider;
    }
    public get identityProvider(): string | undefined {
        return this['identity_provider'];
    }
    public withSelf(self: string): ProtocolLinks {
        this['self'] = self;
        return this;
    }
}