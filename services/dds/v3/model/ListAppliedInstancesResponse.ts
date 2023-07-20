import { ApplicableInstancesInfo } from './ApplicableInstancesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppliedInstancesResponse extends SdkResponse {
    public instances?: Array<ApplicableInstancesInfo>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ApplicableInstancesInfo>): ListAppliedInstancesResponse {
        this['instances'] = instances;
        return this;
    }
}