

export class ExecuteSummaryVo {
    private 'execute_case_num'?: number;
    private 'defect_num'?: number;
    private 'completed_defect_num'?: number;
    private 'case_success_rate'?: string;
    private 'case_execution_rate'?: string;
    public constructor() { 
    }
    public withExecuteCaseNum(executeCaseNum: number): ExecuteSummaryVo {
        this['execute_case_num'] = executeCaseNum;
        return this;
    }
    public set executeCaseNum(executeCaseNum: number  | undefined) {
        this['execute_case_num'] = executeCaseNum;
    }
    public get executeCaseNum(): number | undefined {
        return this['execute_case_num'];
    }
    public withDefectNum(defectNum: number): ExecuteSummaryVo {
        this['defect_num'] = defectNum;
        return this;
    }
    public set defectNum(defectNum: number  | undefined) {
        this['defect_num'] = defectNum;
    }
    public get defectNum(): number | undefined {
        return this['defect_num'];
    }
    public withCompletedDefectNum(completedDefectNum: number): ExecuteSummaryVo {
        this['completed_defect_num'] = completedDefectNum;
        return this;
    }
    public set completedDefectNum(completedDefectNum: number  | undefined) {
        this['completed_defect_num'] = completedDefectNum;
    }
    public get completedDefectNum(): number | undefined {
        return this['completed_defect_num'];
    }
    public withCaseSuccessRate(caseSuccessRate: string): ExecuteSummaryVo {
        this['case_success_rate'] = caseSuccessRate;
        return this;
    }
    public set caseSuccessRate(caseSuccessRate: string  | undefined) {
        this['case_success_rate'] = caseSuccessRate;
    }
    public get caseSuccessRate(): string | undefined {
        return this['case_success_rate'];
    }
    public withCaseExecutionRate(caseExecutionRate: string): ExecuteSummaryVo {
        this['case_execution_rate'] = caseExecutionRate;
        return this;
    }
    public set caseExecutionRate(caseExecutionRate: string  | undefined) {
        this['case_execution_rate'] = caseExecutionRate;
    }
    public get caseExecutionRate(): string | undefined {
        return this['case_execution_rate'];
    }
}