

export class ShowIpdThirdPartyAssociatedRequest {
    private 'issue_id'?: string;
    private 'project_id'?: string;
    public constructor(issueId?: string, projectId?: string) { 
        this['issue_id'] = issueId;
        this['project_id'] = projectId;
    }
    public withIssueId(issueId: string): ShowIpdThirdPartyAssociatedRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withProjectId(projectId: string): ShowIpdThirdPartyAssociatedRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}