import { AssociateIssueDetail } from './AssociateIssueDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociatedIssuesResponse extends SdkResponse {
    public issues?: Array<AssociateIssueDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssues(issues: Array<AssociateIssueDetail>): ListAssociatedIssuesResponse {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): ListAssociatedIssuesResponse {
        this['total'] = total;
        return this;
    }
}