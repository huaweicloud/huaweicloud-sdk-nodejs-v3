import { ListIssueItemResponse } from './ListIssueItemResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssuesV4Response extends SdkResponse {
    public issues?: Array<ListIssueItemResponse>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssues(issues: Array<ListIssueItemResponse>): ListIssuesV4Response {
        this['issues'] = issues;
        return this;
    }
    public withTotal(total: number): ListIssuesV4Response {
        this['total'] = total;
        return this;
    }
}