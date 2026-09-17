import { IssueBatchOperateEntitiesResult } from './IssueBatchOperateEntitiesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateIpdIssuesResponse extends SdkResponse {
    public result?: Array<IssueBatchOperateEntitiesResult>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<IssueBatchOperateEntitiesResult>): BatchUpdateIpdIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchUpdateIpdIssuesResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchUpdateIpdIssuesResponse {
        this['message'] = message;
        return this;
    }
}