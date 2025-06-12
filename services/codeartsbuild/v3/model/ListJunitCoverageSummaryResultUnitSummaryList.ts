

export class ListJunitCoverageSummaryResultUnitSummaryList {
    private 'job_id'?: string;
    private 'build_no'?: number;
    private 'stage_name'?: string;
    private 'root_id'?: string;
    public region?: string;
    public constructor() { 
    }
    public withJobId(jobId: string): ListJunitCoverageSummaryResultUnitSummaryList {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): ListJunitCoverageSummaryResultUnitSummaryList {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withStageName(stageName: string): ListJunitCoverageSummaryResultUnitSummaryList {
        this['stage_name'] = stageName;
        return this;
    }
    public set stageName(stageName: string  | undefined) {
        this['stage_name'] = stageName;
    }
    public get stageName(): string | undefined {
        return this['stage_name'];
    }
    public withRootId(rootId: string): ListJunitCoverageSummaryResultUnitSummaryList {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withRegion(region: string): ListJunitCoverageSummaryResultUnitSummaryList {
        this['region'] = region;
        return this;
    }
}