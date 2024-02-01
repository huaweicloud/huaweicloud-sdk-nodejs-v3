

export class PrivateProviderSourcePrimitiveTypeHolder {
    private 'provider_source'?: string;
    public constructor() { 
    }
    public withProviderSource(providerSource: string): PrivateProviderSourcePrimitiveTypeHolder {
        this['provider_source'] = providerSource;
        return this;
    }
    public set providerSource(providerSource: string  | undefined) {
        this['provider_source'] = providerSource;
    }
    public get providerSource(): string | undefined {
        return this['provider_source'];
    }
}