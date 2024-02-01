

export class PrivateProviderIdPrimitiveTypeHolder {
    private 'provider_id'?: string;
    public constructor() { 
    }
    public withProviderId(providerId: string): PrivateProviderIdPrimitiveTypeHolder {
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