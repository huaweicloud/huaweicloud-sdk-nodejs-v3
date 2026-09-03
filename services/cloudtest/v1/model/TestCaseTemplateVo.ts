

export class TestCaseTemplateVo {
    public alertTemplateId?: string;
    private 'testcase_id'?: string;
    public constructor() { 
    }
    public withAlertTemplateId(alertTemplateId: string): TestCaseTemplateVo {
        this['alertTemplateId'] = alertTemplateId;
        return this;
    }
    public withTestcaseId(testcaseId: string): TestCaseTemplateVo {
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