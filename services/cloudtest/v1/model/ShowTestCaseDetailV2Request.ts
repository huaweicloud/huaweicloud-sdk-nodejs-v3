

export class ShowTestCaseDetailV2Request {
    private 'project_id'?: string;
    private 'testcase_number'?: string;
    public constructor(projectId?: string, testcaseNumber?: string) { 
        this['project_id'] = projectId;
        this['testcase_number'] = testcaseNumber;
    }
    public withProjectId(projectId: string): ShowTestCaseDetailV2Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTestcaseNumber(testcaseNumber: string): ShowTestCaseDetailV2Request {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
}