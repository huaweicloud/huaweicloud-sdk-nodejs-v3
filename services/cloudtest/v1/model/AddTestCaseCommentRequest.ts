import { TestCaseCommentInfo } from './TestCaseCommentInfo';


export class AddTestCaseCommentRequest {
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    public body?: TestCaseCommentInfo;
    public constructor(projectId?: string, testcaseId?: string) { 
        this['project_id'] = projectId;
        this['testcase_id'] = testcaseId;
    }
    public withProjectId(projectId: string): AddTestCaseCommentRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): AddTestCaseCommentRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
    public withBody(body: TestCaseCommentInfo): AddTestCaseCommentRequest {
        this['body'] = body;
        return this;
    }
}