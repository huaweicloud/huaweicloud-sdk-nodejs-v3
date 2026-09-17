

export class ShowIpdWorkItemFlowRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'issue_category'?: string;
    public constructor(projectId?: string, issueId?: string, issueCategory?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['issue_category'] = issueCategory;
    }
    public withProjectId(projectId: string): ShowIpdWorkItemFlowRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): ShowIpdWorkItemFlowRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueCategory(issueCategory: string): ShowIpdWorkItemFlowRequest {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
}