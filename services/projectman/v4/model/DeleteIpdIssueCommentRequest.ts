

export class DeleteIpdIssueCommentRequest {
    private 'project_id'?: string;
    private 'issue_id'?: string;
    private 'comment_id'?: string;
    public constructor(projectId?: string, issueId?: string, commentId?: string) { 
        this['project_id'] = projectId;
        this['issue_id'] = issueId;
        this['comment_id'] = commentId;
    }
    public withProjectId(projectId: string): DeleteIpdIssueCommentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withIssueId(issueId: string): DeleteIpdIssueCommentRequest {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withCommentId(commentId: string): DeleteIpdIssueCommentRequest {
        this['comment_id'] = commentId;
        return this;
    }
    public set commentId(commentId: string  | undefined) {
        this['comment_id'] = commentId;
    }
    public get commentId(): string | undefined {
        return this['comment_id'];
    }
}