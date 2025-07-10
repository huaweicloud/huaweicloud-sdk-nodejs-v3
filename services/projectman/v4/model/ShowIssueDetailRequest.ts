

export class ShowIssueDetailRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'issue_type'?: string;
    private 'domain_id'?: string;
    public constructor(projectId?: string, issueId?: string, issueType?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['issue_type'] = issueType;
    }
    public withProjectId(projectId: string): ShowIssueDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): ShowIssueDetailRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueType(issueType: string): ShowIssueDetailRequest {
        this['issue_type'] = issueType;
        return this;
    }
    public set issueType(issueType: string  | undefined) {
        this['issue_type'] = issueType;
    }
    public get issueType(): string | undefined {
        return this['issue_type'];
    }
    public withDomainId(domainId: string): ShowIssueDetailRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}