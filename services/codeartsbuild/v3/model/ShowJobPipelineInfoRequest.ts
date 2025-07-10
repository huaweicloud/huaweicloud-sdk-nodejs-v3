

export class ShowJobPipelineInfoRequest {
    private 'job_id'?: string;
    public all?: string;
    private 'check_param_used'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ShowJobPipelineInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withAll(all: string): ShowJobPipelineInfoRequest {
        this['all'] = all;
        return this;
    }
    public withCheckParamUsed(checkParamUsed: string): ShowJobPipelineInfoRequest {
        this['check_param_used'] = checkParamUsed;
        return this;
    }
    public set checkParamUsed(checkParamUsed: string  | undefined) {
        this['check_param_used'] = checkParamUsed;
    }
    public get checkParamUsed(): string | undefined {
        return this['check_param_used'];
    }
}