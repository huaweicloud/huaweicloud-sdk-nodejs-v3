import { ApiType } from './ApiType';
import { ProviderCustomConfig } from './ProviderCustomConfig';


export class VerifyProviderReq {
    public id?: string;
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'api_key'?: string;
    private 'api_type'?: ApiType;
    private 'base_url'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    private 'model_id'?: string;
    public constructor() { 
    }
    public withId(id: string): VerifyProviderReq {
        this['id'] = id;
        return this;
    }
    public withProviderType(providerType: string): VerifyProviderReq {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): VerifyProviderReq {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withApiKey(apiKey: string): VerifyProviderReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withApiType(apiType: ApiType): VerifyProviderReq {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: ApiType  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): ApiType | undefined {
        return this['api_type'];
    }
    public withBaseUrl(baseUrl: string): VerifyProviderReq {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): VerifyProviderReq {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withModelId(modelId: string): VerifyProviderReq {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}