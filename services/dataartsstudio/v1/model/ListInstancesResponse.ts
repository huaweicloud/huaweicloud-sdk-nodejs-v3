import { InstanceOverviewVo } from './InstanceOverviewVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public count?: number;
    public resources?: Array<InstanceOverviewVo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withResources(resources: Array<InstanceOverviewVo>): ListInstancesResponse {
        this['resources'] = resources;
        return this;
    }
}