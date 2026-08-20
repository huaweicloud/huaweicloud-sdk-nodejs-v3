import { IssueVO } from './IssueVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueBySnapIdsResponse extends SdkResponse {
    public message?: string;
    public code?: string;
    public issues?: Array<IssueVO>;
    public constructor() { 
        super();
    }
    public withMessage(message: string): ListIssueBySnapIdsResponse {
        this['message'] = message;
        return this;
    }
    public withCode(code: string): ListIssueBySnapIdsResponse {
        this['code'] = code;
        return this;
    }
    public withIssues(issues: Array<IssueVO>): ListIssueBySnapIdsResponse {
        this['issues'] = issues;
        return this;
    }
}