

export class ShowIpdAttachmentByWorkItemIdRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'source_project_id'?: string;
    public constructor(projectId?: string, issueId?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
    }
    public withProjectId(projectId: string): ShowIpdAttachmentByWorkItemIdRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): ShowIpdAttachmentByWorkItemIdRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withSourceProjectId(sourceProjectId: string): ShowIpdAttachmentByWorkItemIdRequest {
        this['source_project_id'] = sourceProjectId;
        return this;
    }
    public set sourceProjectId(sourceProjectId: string  | undefined) {
        this['source_project_id'] = sourceProjectId;
    }
    public get sourceProjectId(): string | undefined {
        return this['source_project_id'];
    }
}