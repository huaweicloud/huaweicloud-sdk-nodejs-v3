

export class TestPlanDetailReportStage {
    private 'case_complete_rate'?: string;
    public constructor() { 
    }
    public withCaseCompleteRate(caseCompleteRate: string): TestPlanDetailReportStage {
        this['case_complete_rate'] = caseCompleteRate;
        return this;
    }
    public set caseCompleteRate(caseCompleteRate: string  | undefined) {
        this['case_complete_rate'] = caseCompleteRate;
    }
    public get caseCompleteRate(): string | undefined {
        return this['case_complete_rate'];
    }
}