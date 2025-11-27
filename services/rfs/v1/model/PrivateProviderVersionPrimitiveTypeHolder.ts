

export class PrivateProviderVersionPrimitiveTypeHolder {
    private 'provider_version'?: string;
    public constructor() { 
    }
    public withProviderVersion(providerVersion: string): PrivateProviderVersionPrimitiveTypeHolder {
        this['provider_version'] = providerVersion;
        return this;
    }
    public set providerVersion(providerVersion: string  | undefined) {
        this['provider_version'] = providerVersion;
    }
    public get providerVersion(): string | undefined {
        return this['provider_version'];
    }
}