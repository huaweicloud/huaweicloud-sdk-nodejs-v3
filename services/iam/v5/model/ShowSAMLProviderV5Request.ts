

export class ShowSAMLProviderV5Request {
    private 'provider_id'?: string;
    public constructor(providerId?: string) { 
        this['provider_id'] = providerId;
    }
    public withProviderId(providerId: string): ShowSAMLProviderV5Request {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
}