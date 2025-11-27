

export class RestartDbAgentJobRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: string): RestartDbAgentJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): RestartDbAgentJobRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withJobId(jobId: string): RestartDbAgentJobRequest {
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