import { PlanResponseResult } from './PlanResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePlanInfoResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: PlanResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdatePlanInfoResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdatePlanInfoResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: PlanResponseResult): UpdatePlanInfoResponse {
        this['result'] = result;
        return this;
    }
}