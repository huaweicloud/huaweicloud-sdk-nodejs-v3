import { ResourceProviderResponse } from './ResourceProviderResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllProvidersResponse extends SdkResponse {
    private 'resource_providers'?: Array<ResourceProviderResponse>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withResourceProviders(resourceProviders: Array<ResourceProviderResponse>): ListAllProvidersResponse {
        this['resource_providers'] = resourceProviders;
        return this;
    }
    public set resourceProviders(resourceProviders: Array<ResourceProviderResponse>  | undefined) {
        this['resource_providers'] = resourceProviders;
    }
    public get resourceProviders(): Array<ResourceProviderResponse> | undefined {
        return this['resource_providers'];
    }
    public withTotalCount(totalCount: number): ListAllProvidersResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}