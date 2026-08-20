import { HealthReportRatioStat } from './HealthReportRatioStat';
import { HealthReportSingleValueStat } from './HealthReportSingleValueStat';


export class HealthReportDiskStatInfo {
    private 'peak_stats'?: Array<HealthReportSingleValueStat>;
    private 'ratio_stats'?: Array<HealthReportRatioStat>;
    private 'analyze_success'?: boolean;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withPeakStats(peakStats: Array<HealthReportSingleValueStat>): HealthReportDiskStatInfo {
        this['peak_stats'] = peakStats;
        return this;
    }
    public set peakStats(peakStats: Array<HealthReportSingleValueStat>  | undefined) {
        this['peak_stats'] = peakStats;
    }
    public get peakStats(): Array<HealthReportSingleValueStat> | undefined {
        return this['peak_stats'];
    }
    public withRatioStats(ratioStats: Array<HealthReportRatioStat>): HealthReportDiskStatInfo {
        this['ratio_stats'] = ratioStats;
        return this;
    }
    public set ratioStats(ratioStats: Array<HealthReportRatioStat>  | undefined) {
        this['ratio_stats'] = ratioStats;
    }
    public get ratioStats(): Array<HealthReportRatioStat> | undefined {
        return this['ratio_stats'];
    }
    public withAnalyzeSuccess(analyzeSuccess: boolean): HealthReportDiskStatInfo {
        this['analyze_success'] = analyzeSuccess;
        return this;
    }
    public set analyzeSuccess(analyzeSuccess: boolean  | undefined) {
        this['analyze_success'] = analyzeSuccess;
    }
    public get analyzeSuccess(): boolean | undefined {
        return this['analyze_success'];
    }
    public withErrorMessage(errorMessage: string): HealthReportDiskStatInfo {
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