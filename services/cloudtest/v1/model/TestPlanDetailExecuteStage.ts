

export class TestPlanDetailExecuteStage {
    private 'defect_count'?: number;
    private 'completed_defect_count'?: number;
    private 'case_pass_rate'?: string;
    private 'executed_case_count'?: number;
    public constructor() { 
    }
    public withDefectCount(defectCount: number): TestPlanDetailExecuteStage {
        this['defect_count'] = defectCount;
        return this;
    }
    public set defectCount(defectCount: number  | undefined) {
        this['defect_count'] = defectCount;
    }
    public get defectCount(): number | undefined {
        return this['defect_count'];
    }
    public withCompletedDefectCount(completedDefectCount: number): TestPlanDetailExecuteStage {
        this['completed_defect_count'] = completedDefectCount;
        return this;
    }
    public set completedDefectCount(completedDefectCount: number  | undefined) {
        this['completed_defect_count'] = completedDefectCount;
    }
    public get completedDefectCount(): number | undefined {
        return this['completed_defect_count'];
    }
    public withCasePassRate(casePassRate: string): TestPlanDetailExecuteStage {
        this['case_pass_rate'] = casePassRate;
        return this;
    }
    public set casePassRate(casePassRate: string  | undefined) {
        this['case_pass_rate'] = casePassRate;
    }
    public get casePassRate(): string | undefined {
        return this['case_pass_rate'];
    }
    public withExecutedCaseCount(executedCaseCount: number): TestPlanDetailExecuteStage {
        this['executed_case_count'] = executedCaseCount;
        return this;
    }
    public set executedCaseCount(executedCaseCount: number  | undefined) {
        this['executed_case_count'] = executedCaseCount;
    }
    public get executedCaseCount(): number | undefined {
        return this['executed_case_count'];
    }
}