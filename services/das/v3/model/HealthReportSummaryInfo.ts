import { HealthReportAnalysisResult } from './HealthReportAnalysisResult';


export class HealthReportSummaryInfo {
    private 'analysis_results'?: Array<HealthReportAnalysisResult>;
    public constructor(analysisResults?: Array<HealthReportAnalysisResult>) { 
        this['analysis_results'] = analysisResults;
    }
    public withAnalysisResults(analysisResults: Array<HealthReportAnalysisResult>): HealthReportSummaryInfo {
        this['analysis_results'] = analysisResults;
        return this;
    }
    public set analysisResults(analysisResults: Array<HealthReportAnalysisResult>  | undefined) {
        this['analysis_results'] = analysisResults;
    }
    public get analysisResults(): Array<HealthReportAnalysisResult> | undefined {
        return this['analysis_results'];
    }
}