

export class DeleteTestCaseCommentRequest {
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    private 'comment_id'?: string;
    private 'version_uri'?: string;
    public constructor(projectId?: string, testcaseId?: string, commentId?: string) { 
        this['project_id'] = projectId;
        this['testcase_id'] = testcaseId;
        this['comment_id'] = commentId;
    }
    public withProjectId(projectId: string): DeleteTestCaseCommentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): DeleteTestCaseCommentRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withCommentId(commentId: string): DeleteTestCaseCommentRequest {
        this['comment_id'] = commentId;
        return this;
    }
    public set commentId(commentId: string  | undefined) {
        this['comment_id'] = commentId;
    }
    public get commentId(): string | undefined {
        return this['comment_id'];
    }
    public withVersionUri(versionUri: string): DeleteTestCaseCommentRequest {
        this['version_uri'] = versionUri;
        return this;
    }
    public set versionUri(versionUri: string  | undefined) {
        this['version_uri'] = versionUri;
    }
    public get versionUri(): string | undefined {
        return this['version_uri'];
    }
}