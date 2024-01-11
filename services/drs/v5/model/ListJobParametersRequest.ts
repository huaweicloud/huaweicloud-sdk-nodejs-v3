

export class ListJobParametersRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): ListJobParametersRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ListJobParametersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: number): ListJobParametersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListJobParametersRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListJobParametersRequest {
        this['name'] = name;
        return this;
    }
}