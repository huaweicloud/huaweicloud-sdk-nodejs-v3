import { PlanResponseResult } from './PlanResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlanDetailResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: PlanResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListPlanDetailResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListPlanDetailResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: PlanResponseResult): ListPlanDetailResponse {
        this['result'] = result;
        return this;
    }
}