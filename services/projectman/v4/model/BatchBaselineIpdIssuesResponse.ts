import { BatchBaselineIssueResponseResult } from './BatchBaselineIssueResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchBaselineIpdIssuesResponse extends SdkResponse {
    public result?: Array<BatchBaselineIssueResponseResult>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<BatchBaselineIssueResponseResult>): BatchBaselineIpdIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchBaselineIpdIssuesResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchBaselineIpdIssuesResponse {
        this['message'] = message;
        return this;
    }
}