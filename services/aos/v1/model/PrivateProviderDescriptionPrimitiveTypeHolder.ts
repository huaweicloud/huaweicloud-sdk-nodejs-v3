

export class PrivateProviderDescriptionPrimitiveTypeHolder {
    private 'provider_description'?: string;
    public constructor() { 
    }
    public withProviderDescription(providerDescription: string): PrivateProviderDescriptionPrimitiveTypeHolder {
        this['provider_description'] = providerDescription;
        return this;
    }
    public set providerDescription(providerDescription: string  | undefined) {
        this['provider_description'] = providerDescription;
    }
    public get providerDescription(): string | undefined {
        return this['provider_description'];
    }
}