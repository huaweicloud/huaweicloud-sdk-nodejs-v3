

export class ShowOutputInfoRequest {
    private 'job_id'?: string;
    private 'build_no'?: number;
    public constructor(jobId?: string, buildNo?: number) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
    }
    public withJobId(jobId: string): ShowOutputInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: number): ShowOutputInfoRequest {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: number  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): number | undefined {
        return this['build_no'];
    }
}