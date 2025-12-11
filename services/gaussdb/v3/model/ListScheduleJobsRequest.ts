

export class ListScheduleJobsRequest {
    private 'X-Language'?: string;
    public offset?: string;
    public limit?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'job_id'?: string;
    private 'job_name'?: string;
    private 'instance_id'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): ListScheduleJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: string): ListScheduleJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListScheduleJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: string): ListScheduleJobsRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListScheduleJobsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListScheduleJobsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withJobId(jobId: string): ListScheduleJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withJobName(jobName: string): ListScheduleJobsRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withInstanceId(instanceId: string): ListScheduleJobsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}