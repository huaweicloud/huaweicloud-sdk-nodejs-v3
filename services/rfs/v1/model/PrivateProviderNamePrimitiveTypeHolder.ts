

export class PrivateProviderNamePrimitiveTypeHolder {
    private 'provider_name'?: string;
    public constructor(providerName?: string) { 
        this['provider_name'] = providerName;
    }
    public withProviderName(providerName: string): PrivateProviderNamePrimitiveTypeHolder {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
}