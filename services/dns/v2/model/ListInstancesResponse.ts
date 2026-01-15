import { ResolutionInstances } from './ResolutionInstances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstancesResponse extends SdkResponse {
    public instances?: Array<ResolutionInstances>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ResolutionInstances>): ListInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}