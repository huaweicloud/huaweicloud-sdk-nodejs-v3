

export class ListNosqlTaskListRequest {
    private 'job_name'?: string;
    private 'job_status'?: string;
    private 'instance_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public offset?: string;
    public limit?: string;
    public constructor() { 
    }
    public withJobName(jobName: string): ListNosqlTaskListRequest {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withJobStatus(jobStatus: string): ListNosqlTaskListRequest {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): string | undefined {
        return this['job_status'];
    }
    public withInstanceId(instanceId: string): ListNosqlTaskListRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStartTime(startTime: string): ListNosqlTaskListRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListNosqlTaskListRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withOffset(offset: string): ListNosqlTaskListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListNosqlTaskListRequest {
        this['limit'] = limit;
        return this;
    }
}