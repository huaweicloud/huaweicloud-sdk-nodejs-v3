import { ModelInfo } from './ModelInfo';
import { ProviderCustomConfig } from './ProviderCustomConfig';


export class InstanceModelProviderConfig {
    public id?: string;
    private 'provider_id'?: string;
    public name?: string;
    private 'provider_type'?: string;
    private 'update_time'?: string;
    private 'api_base_url'?: string;
    private 'custom_config'?: ProviderCustomConfig;
    public models?: Array<ModelInfo>;
    public constructor() { 
    }
    public withId(id: string): InstanceModelProviderConfig {
        this['id'] = id;
        return this;
    }
    public withProviderId(providerId: string): InstanceModelProviderConfig {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withName(name: string): InstanceModelProviderConfig {
        this['name'] = name;
        return this;
    }
    public withProviderType(providerType: string): InstanceModelProviderConfig {
        this['provider_type'] = providerType;
        return this;
    }
    public set providerType(providerType: string  | undefined) {
        this['provider_type'] = providerType;
    }
    public get providerType(): string | undefined {
        return this['provider_type'];
    }
    public withUpdateTime(updateTime: string): InstanceModelProviderConfig {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withApiBaseUrl(apiBaseUrl: string): InstanceModelProviderConfig {
        this['api_base_url'] = apiBaseUrl;
        return this;
    }
    public set apiBaseUrl(apiBaseUrl: string  | undefined) {
        this['api_base_url'] = apiBaseUrl;
    }
    public get apiBaseUrl(): string | undefined {
        return this['api_base_url'];
    }
    public withCustomConfig(customConfig: ProviderCustomConfig): InstanceModelProviderConfig {
        this['custom_config'] = customConfig;
        return this;
    }
    public set customConfig(customConfig: ProviderCustomConfig  | undefined) {
        this['custom_config'] = customConfig;
    }
    public get customConfig(): ProviderCustomConfig | undefined {
        return this['custom_config'];
    }
    public withModels(models: Array<ModelInfo>): InstanceModelProviderConfig {
        this['models'] = models;
        return this;
    }
}