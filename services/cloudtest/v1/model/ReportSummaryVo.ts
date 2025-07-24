

export class ReportSummaryVo {
    private 'case_success_rate'?: string;
    private 'case_complete_rate'?: string;
    public constructor() { 
    }
    public withCaseSuccessRate(caseSuccessRate: string): ReportSummaryVo {
        this['case_success_rate'] = caseSuccessRate;
        return this;
    }
    public set caseSuccessRate(caseSuccessRate: string  | undefined) {
        this['case_success_rate'] = caseSuccessRate;
    }
    public get caseSuccessRate(): string | undefined {
        return this['case_success_rate'];
    }
    public withCaseCompleteRate(caseCompleteRate: string): ReportSummaryVo {
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