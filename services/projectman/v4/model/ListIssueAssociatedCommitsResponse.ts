import { CommitRecordDetail } from './CommitRecordDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIssueAssociatedCommitsResponse extends SdkResponse {
    public commits?: Array<CommitRecordDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withCommits(commits: Array<CommitRecordDetail>): ListIssueAssociatedCommitsResponse {
        this['commits'] = commits;
        return this;
    }
    public withTotal(total: number): ListIssueAssociatedCommitsResponse {
        this['total'] = total;
        return this;
    }
}