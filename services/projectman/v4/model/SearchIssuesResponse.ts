import { WorkTableIssuseListResponseBodyIssueList } from './WorkTableIssuseListResponseBodyIssueList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchIssuesResponse extends SdkResponse {
    private 'issue_list'?: Array<WorkTableIssuseListResponseBodyIssueList>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withIssueList(issueList: Array<WorkTableIssuseListResponseBodyIssueList>): SearchIssuesResponse {
        this['issue_list'] = issueList;
        return this;
    }
    public set issueList(issueList: Array<WorkTableIssuseListResponseBodyIssueList>  | undefined) {
        this['issue_list'] = issueList;
    }
    public get issueList(): Array<WorkTableIssuseListResponseBodyIssueList> | undefined {
        return this['issue_list'];
    }
    public withTotal(total: number): SearchIssuesResponse {
        this['total'] = total;
        return this;
    }
}