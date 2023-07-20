import { ApplicableInstanceRsp } from './ApplicableInstanceRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicableInstancesResponse extends SdkResponse {
    public instances?: Array<ApplicableInstanceRsp>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<ApplicableInstanceRsp>): ShowApplicableInstancesResponse {
        this['instances'] = instances;
        return this;
    }
    public withCount(count: number): ShowApplicableInstancesResponse {
        this['count'] = count;
        return this;
    }
}