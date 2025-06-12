

export class JobSummary {
    private 'avg_success_ratio'?: number;
    private 'build_no'?: number;
    private 'job_total'?: number;
    private 'version_total'?: string;
    public constructor() { 
    }
    public withAvgSuccessRatio(avgSuccessRatio: number): JobSummary {
        this['avg_success_ratio'] = avgSuccessRatio;
        return this;
    }
    public set avgSuccessRatio(avgSuccessRatio: number  | undefined) {
        this['avg_success_ratio'] = avgSuccessRatio;
    }
    public get avgSuccessRatio(): number | undefined {
        return this['avg_success_ratio'];
    }
    public withBuildNo(buildNo: number): JobSummary {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
    public withJobTotal(jobTotal: number): JobSummary {
        this['job_total'] = jobTotal;
        return this;
    }
    public set jobTotal(jobTotal: number  | undefined) {
        this['job_total'] = jobTotal;
    }
    public get jobTotal(): number | undefined {
        return this['job_total'];
    }
    public withVersionTotal(versionTotal: string): JobSummary {
        this['version_total'] = versionTotal;
        return this;
    }
    public set versionTotal(versionTotal: string  | undefined) {
        this['version_total'] = versionTotal;
    }
    public get versionTotal(): string | undefined {
        return this['version_total'];
    }
}