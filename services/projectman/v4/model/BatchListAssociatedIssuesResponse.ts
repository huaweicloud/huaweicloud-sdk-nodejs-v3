import { BatchAssociatedIssue } from './BatchAssociatedIssue';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListAssociatedIssuesResponse extends SdkResponse {
    public issues?: Array<BatchAssociatedIssue>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssues(issues: Array<BatchAssociatedIssue>): BatchListAssociatedIssuesResponse {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): BatchListAssociatedIssuesResponse {
        this['total'] = total;
        return this;
    }
}