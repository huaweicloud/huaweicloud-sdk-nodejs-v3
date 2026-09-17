import { PlanResponseResult } from './PlanResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePlansResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: PlanResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CreatePlansResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): CreatePlansResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: PlanResponseResult): CreatePlansResponse {
        this['result'] = result;
        return this;
    }
}