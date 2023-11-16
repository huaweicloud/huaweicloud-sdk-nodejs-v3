

export class StopJobRequestBody {
    private 'job_id'?: string;
    private 'build_no'?: string;
    public constructor(jobId?: string, buildNo?: string) { 
        this['job_id'] = jobId;
        this['build_no'] = buildNo;
    }
    public withJobId(jobId: string): StopJobRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNo(buildNo: string): StopJobRequestBody {
        this['build_no'] = buildNo;
        return this;
    }
    public set buildNo(buildNo: string  | undefined) {
        this['build_no'] = buildNo;
    }
    public get buildNo(): string | undefined {
        return this['build_no'];
    }
}