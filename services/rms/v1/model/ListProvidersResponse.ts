import { ResourceProviderResponse } from './ResourceProviderResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProvidersResponse extends SdkResponse {
    private 'resource_providers'?: Array<ResourceProviderResponse> | undefined;
    private 'total_count'?: number | undefined;
    public constructor() { 
        super();
    }
    public withResourceProviders(resourceProviders: Array<ResourceProviderResponse>): ListProvidersResponse {
        this['resource_providers'] = resourceProviders;
        return this;
    }
    public set resourceProviders(resourceProviders: Array<ResourceProviderResponse> | undefined) {
        this['resource_providers'] = resourceProviders;
    }
    public get resourceProviders() {
        return this['resource_providers'];
    }
    public withTotalCount(totalCount: number): ListProvidersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount() {
        return this['total_count'];
    }
}