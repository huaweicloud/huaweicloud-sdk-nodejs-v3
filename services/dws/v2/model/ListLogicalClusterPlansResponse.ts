import { LogicalClusterPlanVo } from './LogicalClusterPlanVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogicalClusterPlansResponse extends SdkResponse {
    public plans?: Array<LogicalClusterPlanVo>;
    public constructor() { 
        super();
    }
    public withPlans(plans: Array<LogicalClusterPlanVo>): ListLogicalClusterPlansResponse {
        this['plans'] = plans;
        return this;
    }
}