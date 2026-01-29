

export class DownloadIpdImageInIssueRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'file_name'?: string;
    public constructor(projectId?: string, issueId?: string, fileName?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['file_name'] = fileName;
    }
    public withProjectId(projectId: string): DownloadIpdImageInIssueRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): DownloadIpdImageInIssueRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withFileName(fileName: string): DownloadIpdImageInIssueRequest {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}