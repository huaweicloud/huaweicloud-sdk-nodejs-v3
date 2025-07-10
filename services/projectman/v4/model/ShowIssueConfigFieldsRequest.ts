

export class ShowIssueConfigFieldsRequest {
    private 'project_id'?: string;
    private 'issue_category'?: string;
    public constructor(projectId?: string, issueCategory?: string) { 
        this['project_id'] = projectId;
        this['issue_category'] = issueCategory;
    }
    public withProjectId(projectId: string): ShowIssueConfigFieldsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueCategory(issueCategory: string): ShowIssueConfigFieldsRequest {
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