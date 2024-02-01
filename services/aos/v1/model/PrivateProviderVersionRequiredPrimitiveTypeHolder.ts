

export class PrivateProviderVersionRequiredPrimitiveTypeHolder {
    private 'provider_version'?: string;
    public constructor(providerVersion?: string) { 
        this['provider_version'] = providerVersion;
    }
    public withProviderVersion(providerVersion: string): PrivateProviderVersionRequiredPrimitiveTypeHolder {
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