import { ApiType } from './ApiType';
import { ProviderCustomConfig } from './ProviderCustomConfig';


export class ProviderTemplateInfo {
    private 'provider_type'?: string;
    private 'provider_id'?: string;
    private 'base_url'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    private 'api_type'?: ApiType;
    public constructor() { 
    }
    public withProviderType(providerType: string): ProviderTemplateInfo {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withProviderId(providerId: string): ProviderTemplateInfo {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withBaseUrl(baseUrl: string): ProviderTemplateInfo {
        this['base_url'] = baseUrl;
        return this;
    }
    public set baseUrl(baseUrl: string  | undefined) {
        this['base_url'] = baseUrl;
    }
    public get baseUrl(): string | undefined {
        return this['base_url'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): ProviderTemplateInfo {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withApiType(apiType: ApiType): ProviderTemplateInfo {
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