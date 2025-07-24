import { TestPlanVo } from './TestPlanVo';


export class TestcasePlanVo {
    private 'testcase_uri'?: string;
    private 'testcase_number'?: string;
    public plans?: Array<TestPlanVo>;
    public constructor() { 
    }
    public withTestcaseUri(testcaseUri: string): TestcasePlanVo {
        this['testcase_uri'] = testcaseUri;
        return this;
    }
    public set testcaseUri(testcaseUri: string  | undefined) {
        this['testcase_uri'] = testcaseUri;
    }
    public get testcaseUri(): string | undefined {
        return this['testcase_uri'];
    }
    public withTestcaseNumber(testcaseNumber: string): TestcasePlanVo {
        this['testcase_number'] = testcaseNumber;
        return this;
    }
    public set testcaseNumber(testcaseNumber: string  | undefined) {
        this['testcase_number'] = testcaseNumber;
    }
    public get testcaseNumber(): string | undefined {
        return this['testcase_number'];
    }
    public withPlans(plans: Array<TestPlanVo>): TestcasePlanVo {
        this['plans'] = plans;
        return this;
    }
}