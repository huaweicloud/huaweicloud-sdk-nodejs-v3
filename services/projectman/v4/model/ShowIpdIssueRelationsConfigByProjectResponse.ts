import { RelationConfig } from './RelationConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdIssueRelationsConfigByProjectResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: RelationConfig;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdIssueRelationsConfigByProjectResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdIssueRelationsConfigByProjectResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: RelationConfig): ShowIpdIssueRelationsConfigByProjectResponse {
        this['result'] = result;
        return this;
    }
}