import { ApiType } from './ApiType';
import { CreateModelReq } from './CreateModelReq';
import { ProviderCustomConfig } from './ProviderCustomConfig';


export class CreateProviderReq {
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'api_key'?: string;
    private 'provider_name'?: string;
    private 'base_url'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    public models?: Array<CreateModelReq>;
    private 'api_type'?: ApiType;
    public constructor(providerType?: string, providerId?: string, providerName?: string, baseUrl?: string, apiType?: ApiType) { 
        this['provider_type'] = providerType;
        this['provider_id'] = providerId;
        this['provider_name'] = providerName;
        this['base_url'] = baseUrl;
        this['api_type'] = apiType;
    }
    public withProviderType(providerType: string): CreateProviderReq {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): CreateProviderReq {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withApiKey(apiKey: string): CreateProviderReq {
        this['api_key'] = apiKey;
        return this;
    }
    public set apiKey(apiKey: string  | undefined) {
        this['api_key'] = apiKey;
    }
    public get apiKey(): string | undefined {
        return this['api_key'];
    }
    public withProviderName(providerName: string): CreateProviderReq {
        this['provider_name'] = providerName;
        return this;
    }
    public set providerName(providerName: string  | undefined) {
        this['provider_name'] = providerName;
    }
    public get providerName(): string | undefined {
        return this['provider_name'];
    }
    public withBaseUrl(baseUrl: string): CreateProviderReq {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): CreateProviderReq {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withModels(models: Array<CreateModelReq>): CreateProviderReq {
        this['models'] = models;
        return this;
    }
    public withApiType(apiType: ApiType): CreateProviderReq {
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