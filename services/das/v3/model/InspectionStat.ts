import { HealthReportInspectionScore } from './HealthReportInspectionScore';


export class InspectionStat {
    private 'inspection_score'?: Array<HealthReportInspectionScore>;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withInspectionScore(inspectionScore: Array<HealthReportInspectionScore>): InspectionStat {
        this['inspection_score'] = inspectionScore;
        return this;
    }
    public set inspectionScore(inspectionScore: Array<HealthReportInspectionScore>  | undefined) {
        this['inspection_score'] = inspectionScore;
    }
    public get inspectionScore(): Array<HealthReportInspectionScore> | undefined {
        return this['inspection_score'];
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): InspectionStat {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): InspectionStat {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}