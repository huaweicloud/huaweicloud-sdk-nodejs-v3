import { AopworkflowInstanceDetail } from './AopworkflowInstanceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAopWorkflowInstanceResponse extends SdkResponse {
    public count?: number;
    public instances?: Array<AopworkflowInstanceDetail>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAopWorkflowInstanceResponse {
        this['count'] = count;
        return this;
    }
    public withInstances(instances: Array<AopworkflowInstanceDetail>): ListAopWorkflowInstanceResponse {
        this['instances'] = instances;
        return this;
    }
}