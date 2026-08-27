import { ApiType } from './ApiType';
import { ProviderCustomConfig } from './ProviderCustomConfig';


export class UpdateProviderReq {
    private 'provider_id'?: string;
    private 'provider_name'?: string;
    private 'base_url'?: string;
    private 'api_key'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    private 'api_type'?: ApiType;
    public constructor() { 
    }
    public withProviderId(providerId: string): UpdateProviderReq {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withProviderName(providerName: string): UpdateProviderReq {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withBaseUrl(baseUrl: string): UpdateProviderReq {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withApiKey(apiKey: string): UpdateProviderReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): UpdateProviderReq {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withApiType(apiType: ApiType): UpdateProviderReq {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ApiType  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ApiType | undefined {
        return this['api_type'];
    }
}