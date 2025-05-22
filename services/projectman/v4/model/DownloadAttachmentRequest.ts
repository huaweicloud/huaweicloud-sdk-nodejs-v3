

export class DownloadAttachmentRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'attachment_id'?: string;
    public constructor(projectId?: string, issueId?: string, attachmentId?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['attachment_id'] = attachmentId;
    }
    public withProjectId(projectId: string): DownloadAttachmentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): DownloadAttachmentRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withAttachmentId(attachmentId: string): DownloadAttachmentRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
}