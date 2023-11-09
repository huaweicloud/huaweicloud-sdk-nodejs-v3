

export class ShowJobDetailRequest {
    private 'job_id'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    public desc?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowJobDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withInstanceId(instanceId: string): ShowJobDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ShowJobDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowJobDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withDesc(desc: string): ShowJobDetailRequest {
        this['desc'] = desc;
        return this;
    }
}