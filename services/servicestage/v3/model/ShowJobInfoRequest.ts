

export class ShowJobInfoRequest {
    private 'job_id'?: string;
    private 'instance_id'?: string;
    public limit?: string;
    public offset?: string;
    public desc?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowJobInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withInstanceId(instanceId: string): ShowJobInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: string): ShowJobInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowJobInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withDesc(desc: string): ShowJobInfoRequest {
        this['desc'] = desc;
        return this;
    }
}