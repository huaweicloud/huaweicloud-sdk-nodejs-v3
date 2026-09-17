import { IssueBatchOperateEntitiesResult } from './IssueBatchOperateEntitiesResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteIpdIssuesResponse extends SdkResponse {
    public result?: Array<IssueBatchOperateEntitiesResult>;
    public status?: string;
    public message?: string;
    public constructor() { 
        super();
    }
    public withResult(result: Array<IssueBatchOperateEntitiesResult>): BatchDeleteIpdIssuesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): BatchDeleteIpdIssuesResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): BatchDeleteIpdIssuesResponse {
        this['message'] = message;
        return this;
    }
}