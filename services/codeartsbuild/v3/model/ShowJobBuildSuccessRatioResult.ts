import { ShowJobBuildSuccessRatioResultEveryDayReport } from './ShowJobBuildSuccessRatioResultEveryDayReport';


export class ShowJobBuildSuccessRatioResult {
    private 'job_id'?: string;
    public branch?: string;
    private 'total_success_count'?: number;
    private 'total_count'?: number;
    private 'total_success_ratio_fraction'?: string;
    private 'every_day_report'?: Array<ShowJobBuildSuccessRatioResultEveryDayReport>;
    public constructor() { 
    }
    public withJobId(jobId: string): ShowJobBuildSuccessRatioResult {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBranch(branch: string): ShowJobBuildSuccessRatioResult {
        this['branch'] = branch;
        return this;
    }
    public withTotalSuccessCount(totalSuccessCount: number): ShowJobBuildSuccessRatioResult {
        this['total_success_count'] = totalSuccessCount;
        return this;
    }
    public set totalSuccessCount(totalSuccessCount: number  | undefined) {
        this['total_success_count'] = totalSuccessCount;
    }
    public get totalSuccessCount(): number | undefined {
        return this['total_success_count'];
    }
    public withTotalCount(totalCount: number): ShowJobBuildSuccessRatioResult {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withTotalSuccessRatioFraction(totalSuccessRatioFraction: string): ShowJobBuildSuccessRatioResult {
        this['total_success_ratio_fraction'] = totalSuccessRatioFraction;
        return this;
    }
    public set totalSuccessRatioFraction(totalSuccessRatioFraction: string  | undefined) {
        this['total_success_ratio_fraction'] = totalSuccessRatioFraction;
    }
    public get totalSuccessRatioFraction(): string | undefined {
        return this['total_success_ratio_fraction'];
    }
    public withEveryDayReport(everyDayReport: Array<ShowJobBuildSuccessRatioResultEveryDayReport>): ShowJobBuildSuccessRatioResult {
        this['every_day_report'] = everyDayReport;
        return this;
    }
    public set everyDayReport(everyDayReport: Array<ShowJobBuildSuccessRatioResultEveryDayReport>  | undefined) {
        this['every_day_report'] = everyDayReport;
    }
    public get everyDayReport(): Array<ShowJobBuildSuccessRatioResultEveryDayReport> | undefined {
        return this['every_day_report'];
    }
}