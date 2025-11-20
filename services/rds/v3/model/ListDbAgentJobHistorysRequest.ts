

export class ListDbAgentJobHistorysRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'job_id'?: string;
    private 'run_status'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, jobId?: string) { 
        this['instance_id'] = instanceId;
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: string): ListDbAgentJobHistorysRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListDbAgentJobHistorysRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withJobId(jobId: string): ListDbAgentJobHistorysRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withRunStatus(runStatus: string): ListDbAgentJobHistorysRequest {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: string  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): string | undefined {
        return this['run_status'];
    }
    public withOffset(offset: number): ListDbAgentJobHistorysRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbAgentJobHistorysRequest {
        this['limit'] = limit;
        return this;
    }
}