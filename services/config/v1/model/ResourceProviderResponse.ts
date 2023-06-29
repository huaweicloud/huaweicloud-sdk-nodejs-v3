import { ResourceTypeResponse } from './ResourceTypeResponse';


export class ResourceProviderResponse {
    public provider?: string;
    private 'display_name'?: string | undefined;
    private 'category_display_name'?: string | undefined;
    private 'resource_types'?: Array<ResourceTypeResponse> | undefined;
    public constructor() { 
    }
    public withProvider(provider: string): ResourceProviderResponse {
        this['provider'] = provider;
        return this;
    }
    public withDisplayName(displayName: string): ResourceProviderResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withCategoryDisplayName(categoryDisplayName: string): ResourceProviderResponse {
        this['category_display_name'] = categoryDisplayName;
        return this;
    }
    public set categoryDisplayName(categoryDisplayName: string | undefined) {
        this['category_display_name'] = categoryDisplayName;
    }
    public get categoryDisplayName() {
        return this['category_display_name'];
    }
    public withResourceTypes(resourceTypes: Array<ResourceTypeResponse>): ResourceProviderResponse {
        this['resource_types'] = resourceTypes;
        return this;
    }
    public set resourceTypes(resourceTypes: Array<ResourceTypeResponse> | undefined) {
        this['resource_types'] = resourceTypes;
    }
    public get resourceTypes() {
        return this['resource_types'];
    }
}