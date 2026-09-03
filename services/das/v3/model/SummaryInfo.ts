import { HealthReportAnalysisResult } from './HealthReportAnalysisResult';


export class SummaryInfo {
    private 'analysis_results'?: Array<HealthReportAnalysisResult>;
    private 'health_rank'?: string;
    public constructor() { 
    }
    public withAnalysisResults(analysisResults: Array<HealthReportAnalysisResult>): SummaryInfo {
        this['analysis_results'] = analysisResults;
        return this;
    }
    public set analysisResults(analysisResults: Array<HealthReportAnalysisResult>  | undefined) {
        this['analysis_results'] = analysisResults;
    }
    public get analysisResults(): Array<HealthReportAnalysisResult> | undefined {
        return this['analysis_results'];
    }
    public withHealthRank(healthRank: string): SummaryInfo {
        this['health_rank'] = healthRank;
        return this;
    }
    public set healthRank(healthRank: string  | undefined) {
        this['health_rank'] = healthRank;
    }
    public get healthRank(): string | undefined {
        return this['health_rank'];
    }
}