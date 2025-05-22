

export class ShowReportSummary {
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'stage_name'?: string;
    private 'root_id'?: string;
    public total?: number;
    public success?: number;
    public failures?: number;
    public errors?: number;
    public others?: number;
    private 'execution_time'?: number;
    private 'genrate_time'?: string;
    public region?: string;
    private 'is_success'?: boolean;
    public constructor() { 
    }
    public withJobId(jobId: string): ShowReportSummary {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): ShowReportSummary {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withStageName(stageName: string): ShowReportSummary {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
    public withRootId(rootId: string): ShowReportSummary {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withTotal(total: number): ShowReportSummary {
        this['total'] = total;
        return this;
    }
    public withSuccess(success: number): ShowReportSummary {
        this['success'] = success;
        return this;
    }
    public withFailures(failures: number): ShowReportSummary {
        this['failures'] = failures;
        return this;
    }
    public withErrors(errors: number): ShowReportSummary {
        this['errors'] = errors;
        return this;
    }
    public withOthers(others: number): ShowReportSummary {
        this['others'] = others;
        return this;
    }
    public withExecutionTime(executionTime: number): ShowReportSummary {
        this['execution_time'] = executionTime;
        return this;
    }
    public set executionTime(executionTime: number  | undefined) {
        this['execution_time'] = executionTime;
    }
    public get executionTime(): number | undefined {
        return this['execution_time'];
    }
    public withGenrateTime(genrateTime: string): ShowReportSummary {
        this['genrate_time'] = genrateTime;
        return this;
    }
    public set genrateTime(genrateTime: string  | undefined) {
        this['genrate_time'] = genrateTime;
    }
    public get genrateTime(): string | undefined {
        return this['genrate_time'];
    }
    public withRegion(region: string): ShowReportSummary {
        this['region'] = region;
        return this;
    }
    public withIsSuccess(isSuccess: boolean): ShowReportSummary {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
}