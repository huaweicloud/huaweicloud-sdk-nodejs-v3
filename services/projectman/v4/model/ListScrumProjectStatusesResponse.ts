import { IssueStatus } from './IssueStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScrumProjectStatusesResponse extends SdkResponse {
    public total?: number;
    private 'issue_statuses'?: Array<IssueStatus>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListScrumProjectStatusesResponse {
        this['total'] = total;
        return this;
    }
    public withIssueStatuses(issueStatuses: Array<IssueStatus>): ListScrumProjectStatusesResponse {
        this['issue_statuses'] = issueStatuses;
        return this;
    }
    public set issueStatuses(issueStatuses: Array<IssueStatus>  | undefined) {
        this['issue_statuses'] = issueStatuses;
    }
    public get issueStatuses(): Array<IssueStatus> | undefined {
        return this['issue_statuses'];
    }
}