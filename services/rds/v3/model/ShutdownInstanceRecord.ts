

export class ShutdownInstanceRecord {
    private 'instance_id'?: string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): ShutdownInstanceRecord {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withJobId(jobId: string): ShutdownInstanceRecord {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}