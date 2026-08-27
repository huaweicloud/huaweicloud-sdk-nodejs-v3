import { ProviderCustomConfig } from './ProviderCustomConfig';


export class ListRemoteModelsReq {
    public id?: string;
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'api_key'?: string;
    private 'base_url'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withId(id: string): ListRemoteModelsReq {
        this['id'] = id;
        return this;
    }
    public withProviderType(providerType: string): ListRemoteModelsReq {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): ListRemoteModelsReq {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withApiKey(apiKey: string): ListRemoteModelsReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withBaseUrl(baseUrl: string): ListRemoteModelsReq {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): ListRemoteModelsReq {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withLimit(limit: number): ListRemoteModelsReq {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRemoteModelsReq {
        this['offset'] = offset;
        return this;
    }
}