import { GetResourceGroupResources } from './GetResourceGroupResources';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceGroupsServicesResourcesResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<GetResourceGroupResources>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListResourceGroupsServicesResourcesResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<GetResourceGroupResources>): ListResourceGroupsServicesResourcesResponse {
        this['resources'] = resources;
        return this;
    }
}