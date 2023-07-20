

export class ListImmediateJobsRequest {
    private 'X-Language'?: string;
    public status?: string;
    private 'job_name'?: string;
    private 'job_id'?: string;
    public offset?: string;
    public limit?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListImmediateJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withStatus(status: string): ListImmediateJobsRequest {
        this['status'] = status;
        return this;
    }
    public withJobName(jobName: string): ListImmediateJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobId(jobId: string): ListImmediateJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOffset(offset: string): ListImmediateJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListImmediateJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ListImmediateJobsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListImmediateJobsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}