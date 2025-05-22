

export class ListIssueRecordsV4Request {
    private 'project_id'?: string;
    private 'issue_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(projectId?: string, issueId?: number) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): ListIssueRecordsV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: number): ListIssueRecordsV4Request {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withOffset(offset: number): ListIssueRecordsV4Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListIssueRecordsV4Request {
        this['limit'] = limit;
        return this;
    }
}