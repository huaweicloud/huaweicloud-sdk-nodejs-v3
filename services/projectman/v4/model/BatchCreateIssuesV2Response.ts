import { IssueEntity } from './IssueEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateIssuesV2Response extends SdkResponse {
    public result?: Array<IssueEntity>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<IssueEntity>): BatchCreateIssuesV2Response {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchCreateIssuesV2Response {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchCreateIssuesV2Response {
        this['message'] = message;
        return this;
    }
}