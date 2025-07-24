import { TestCaseCommentInfo } from './TestCaseCommentInfo';


export class UpdateTestCaseCommentRequest {
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    private 'comment_id'?: string;
    public body?: TestCaseCommentInfo;
    public constructor(projectId?: string, testcaseId?: string, commentId?: string) { 
        this['project_id'] = projectId;
        this['testcase_id'] = testcaseId;
        this['comment_id'] = commentId;
    }
    public withProjectId(projectId: string): UpdateTestCaseCommentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): UpdateTestCaseCommentRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withCommentId(commentId: string): UpdateTestCaseCommentRequest {
        this['comment_id'] = commentId;
        return this;
    }
    public set commentId(commentId: string  | undefined) {
        this['comment_id'] = commentId;
    }
    public get commentId(): string | undefined {
        return this['comment_id'];
    }
    public withBody(body: TestCaseCommentInfo): UpdateTestCaseCommentRequest {
        this['body'] = body;
        return this;
    }
}