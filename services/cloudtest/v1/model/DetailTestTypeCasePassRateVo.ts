

export class DetailTestTypeCasePassRateVo {
    private 'test_type'?: number;
    private 'case_pass_rate'?: string;
    public constructor() { 
    }
    public withTestType(testType: number): DetailTestTypeCasePassRateVo {
        this['test_type'] = testType;
        return this;
    }
    public set testType(testType: number  | undefined) {
        this['test_type'] = testType;
    }
    public get testType(): number | undefined {
        return this['test_type'];
    }
    public withCasePassRate(casePassRate: string): DetailTestTypeCasePassRateVo {
        this['case_pass_rate'] = casePassRate;
        return this;
    }
    public set casePassRate(casePassRate: string  | undefined) {
        this['case_pass_rate'] = casePassRate;
    }
    public get casePassRate(): string | undefined {
        return this['case_pass_rate'];
    }
}