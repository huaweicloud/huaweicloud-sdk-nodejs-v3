import { IssueListResult } from './IssueListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class QueryIssueAssociatedItemResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: IssueListResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): QueryIssueAssociatedItemResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): QueryIssueAssociatedItemResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: IssueListResult): QueryIssueAssociatedItemResponse {
        this['result'] = result;
        return this;
    }
}