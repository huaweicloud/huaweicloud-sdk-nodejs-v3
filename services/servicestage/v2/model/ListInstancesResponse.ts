import { InstanceListView } from './InstanceListView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public count?: number;
    public instances?: Array<InstanceListView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstancesResponse {
        this['count'] = count;
        return this;
    }
    public withInstances(instances: Array<InstanceListView>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}