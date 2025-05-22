

export class ListAssociatedTestCasesRequest {
    private 'project_id'?: string;
    private 'issue_id'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(projectId?: string, issueId?: number) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): ListAssociatedTestCasesRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: number): ListAssociatedTestCasesRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: number  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): number | undefined {
        return this['issue_id'];
    }
    public withLimit(limit: number): ListAssociatedTestCasesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAssociatedTestCasesRequest {
        this['offset'] = offset;
        return this;
    }
}