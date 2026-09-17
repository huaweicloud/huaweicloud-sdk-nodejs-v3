

export class ShowSqlLimitingJobInfoRequest {
    private 'instance_id'?: string;
    private 'engine_type'?: string;
    private 'job_id'?: string;
    public constructor(instanceId?: string, engineType?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['engine_type'] = engineType;
        this['job_id'] = jobId;
    }
    public withInstanceId(instanceId: string): ShowSqlLimitingJobInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineType(engineType: string): ShowSqlLimitingJobInfoRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withJobId(jobId: string): ShowSqlLimitingJobInfoRequest {
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