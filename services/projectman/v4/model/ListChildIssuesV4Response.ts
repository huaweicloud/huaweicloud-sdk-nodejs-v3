import { IssueResponseV4 } from './IssueResponseV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListChildIssuesV4Response extends SdkResponse {
    public issues?: Array<IssueResponseV4>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssues(issues: Array<IssueResponseV4>): ListChildIssuesV4Response {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): ListChildIssuesV4Response {
        this['total'] = total;
        return this;
    }
}