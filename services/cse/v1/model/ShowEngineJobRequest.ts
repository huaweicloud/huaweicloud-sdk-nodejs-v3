

export class ShowEngineJobRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'engine_id'?: string;
    private 'job_id'?: string;
    public constructor(engineId?: string, jobId?: string) { 
        this['engine_id'] = engineId;
        this['job_id'] = jobId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ShowEngineJobRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withEngineId(engineId: string): ShowEngineJobRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
    public withJobId(jobId: string): ShowEngineJobRequest {
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