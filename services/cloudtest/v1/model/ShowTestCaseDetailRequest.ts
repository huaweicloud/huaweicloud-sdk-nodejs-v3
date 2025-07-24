

export class ShowTestCaseDetailRequest {
    private 'project_id'?: string;
    private 'testcase_id'?: string;
    public constructor(projectId?: string, testcaseId?: string) { 
        this['project_id'] = projectId;
        this['testcase_id'] = testcaseId;
    }
    public withProjectId(projectId: string): ShowTestCaseDetailRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseId(testcaseId: string): ShowTestCaseDetailRequest {
        this['testcase_id'] = testcaseId;
        return this;
    }
    public set testcaseId(testcaseId: string  | undefined) {
        this['testcase_id'] = testcaseId;
    }
    public get testcaseId(): string | undefined {
        return this['testcase_id'];
    }
}