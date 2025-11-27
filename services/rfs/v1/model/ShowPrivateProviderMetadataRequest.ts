

export class ShowPrivateProviderMetadataRequest {
    private 'Client-Request-Id'?: string;
    private 'provider_name'?: string;
    private 'provider_id'?: string;
    public constructor(clientRequestId?: string, providerName?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['provider_name'] = providerName;
    }
    public withClientRequestId(clientRequestId: string): ShowPrivateProviderMetadataRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withProviderName(providerName: string): ShowPrivateProviderMetadataRequest {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withProviderId(providerId: string): ShowPrivateProviderMetadataRequest {
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