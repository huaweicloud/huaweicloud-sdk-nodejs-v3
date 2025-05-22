import { IssueItemSfV4 } from './IssueItemSfV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssuesSfV4Response extends SdkResponse {
    public issues?: Array<IssueItemSfV4>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssues(issues: Array<IssueItemSfV4>): ListIssuesSfV4Response {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): ListIssuesSfV4Response {
        this['total'] = total;
        return this;
    }
}