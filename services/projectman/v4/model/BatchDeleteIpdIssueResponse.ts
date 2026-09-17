import { IssueBatchOperateEntitiesResult } from './IssueBatchOperateEntitiesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteIpdIssueResponse extends SdkResponse {
    public result?: Array<IssueBatchOperateEntitiesResult>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<IssueBatchOperateEntitiesResult>): BatchDeleteIpdIssueResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchDeleteIpdIssueResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchDeleteIpdIssueResponse {
        this['message'] = message;
        return this;
    }
}