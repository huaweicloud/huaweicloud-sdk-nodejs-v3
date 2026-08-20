import { ShowIpdProcessInstancesResponseResult } from './ShowIpdProcessInstancesResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIpdReviewFormsByIssueIdResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: ShowIpdProcessInstancesResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListIpdReviewFormsByIssueIdResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ListIpdReviewFormsByIssueIdResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: ShowIpdProcessInstancesResponseResult): ListIpdReviewFormsByIssueIdResponse {
        this['result'] = result;
        return this;
    }
}