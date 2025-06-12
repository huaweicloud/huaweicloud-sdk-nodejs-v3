

export class ShowPrivateProviderVersionMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'provider_name'?: string;
    private 'provider_version'?: string;
    private 'provider_id'?: string;
    public constructor(clientRequestId?: string, providerName?: string, providerVersion?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['provider_name'] = providerName;
        this['provider_version'] = providerVersion;
    }
    public withClientRequestId(clientRequestId: string): ShowPrivateProviderVersionMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProviderName(providerName: string): ShowPrivateProviderVersionMetadataRequest {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderVersion(providerVersion: string): ShowPrivateProviderVersionMetadataRequest {
        this['provider_version'] = providerVersion;
        return this;
    }
    public set providerVersion(providerVersion: string  | undefined) {
        this['provider_version'] = providerVersion;
    }
    public get providerVersion(): string | undefined {
        return this['provider_version'];
    }
    public withProviderId(providerId: string): ShowPrivateProviderVersionMetadataRequest {
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