

export class BatchDeleteIssuesRequestV4 {
    private 'issue_ids'?: Array<number>;
    public constructor(issueIds?: Array<number>) { 
        this['issue_ids'] = issueIds;
    }
    public withIssueIds(issueIds: Array<number>): BatchDeleteIssuesRequestV4 {
        this['issue_ids'] = issueIds;
        return this;
    }
    public set issueIds(issueIds: Array<number>  | undefined) {
        this['issue_ids'] = issueIds;
    }
    public get issueIds(): Array<number> | undefined {
        return this['issue_ids'];
    }
}