

export class ListJobsRequest {
    public offset?: number;
    public limit?: number;
    private 'instance_id'?: string;
    private 'app_id'?: string;
    public target?: string;
    private 'job_status'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListJobsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstanceId(instanceId: string): ListJobsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppId(appId: string): ListJobsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withTarget(target: string): ListJobsRequest {
        this['target'] = target;
        return this;
    }
    public withJobStatus(jobStatus: string): ListJobsRequest {
        this['job_status'] = jobStatus;
        return this;
    }
    public set jobStatus(jobStatus: string  | undefined) {
        this['job_status'] = jobStatus;
    }
    public get jobStatus(): string | undefined {
        return this['job_status'];
    }
}