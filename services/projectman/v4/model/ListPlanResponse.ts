import { PlanListResponsePage } from './PlanListResponsePage';
import { PlanResponseResult } from './PlanResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPlanResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: Array<PlanResponseResult>;
    public page?: PlanListResponsePage;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListPlanResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListPlanResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: Array<PlanResponseResult>): ListPlanResponse {
        this['result'] = result;
        return this;
    }
    public withPage(page: PlanListResponsePage): ListPlanResponse {
        this['page'] = page;
        return this;
    }
}