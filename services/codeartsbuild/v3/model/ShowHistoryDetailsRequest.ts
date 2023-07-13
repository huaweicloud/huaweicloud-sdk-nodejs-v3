

export class ShowHistoryDetailsRequest {
    private 'job_id': string | undefined;
    private 'build_number': number | undefined;
    public constructor(jobId?: any, buildNumber?: any) { 
        this['job_id'] = jobId;
        this['build_number'] = buildNumber;
    }
    public withJobId(jobId: string): ShowHistoryDetailsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withBuildNumber(buildNumber: number): ShowHistoryDetailsRequest {
        this['build_number'] = buildNumber;
        return this;
    }
    public set buildNumber(buildNumber: number | undefined) {
        this['build_number'] = buildNumber;
    }
    public get buildNumber() {
        return this['build_number'];
    }
}