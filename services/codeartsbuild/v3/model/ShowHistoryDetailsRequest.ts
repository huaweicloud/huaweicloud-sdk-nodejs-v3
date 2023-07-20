

export class ShowHistoryDetailsRequest {
    private 'job_id'?: string;
    private 'build_number'?: number;
    public constructor(jobId?: string, buildNumber?: number) { 
        this['job_id'] = jobId;
        this['build_number'] = buildNumber;
    }
    public withJobId(jobId: string): ShowHistoryDetailsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withBuildNumber(buildNumber: number): ShowHistoryDetailsRequest {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number  | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber(): number | undefined {
        return this['build_number'];
    }
}