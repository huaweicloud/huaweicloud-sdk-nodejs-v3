import { ResourceTypeBody } from './ResourceTypeBody';


export class ProviderResponseBody {
    public provider: string;
    private 'provider_i18n_display_name': string | undefined;
    private 'resource_types': Array<ResourceTypeBody> | undefined;
    public constructor(provider?: any, providerI18nDisplayName?: any, resourceTypes?: any) { 
        this['provider'] = provider;
        this['provider_i18n_display_name'] = providerI18nDisplayName;
        this['resource_types'] = resourceTypes;
    }
    public withProvider(provider: string): ProviderResponseBody {
        this['provider'] = provider;
        return this;
    }
    public withProviderI18nDisplayName(providerI18nDisplayName: string): ProviderResponseBody {
        this['provider_i18n_display_name'] = providerI18nDisplayName;
        return this;
    }
    public set providerI18nDisplayName(providerI18nDisplayName: string | undefined) {
        this['provider_i18n_display_name'] = providerI18nDisplayName;
    }
    public get providerI18nDisplayName() {
        return this['provider_i18n_display_name'];
    }
    public withResourceTypes(resourceTypes: Array<ResourceTypeBody>): ProviderResponseBody {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<ResourceTypeBody> | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes() {
        return this['resource_types'];
    }
}