

export class ShowTimelineRequest {
    private 'job_id'?: string;
    private 'X-Language'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string, xLanguage?: string) { 
        this['job_id'] = jobId;
        this['X-Language'] = xLanguage;
    }
    public withJobId(jobId: string): ShowTimelineRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXLanguage(xLanguage: string): ShowTimelineRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ShowTimelineRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowTimelineRequest {
        this['offset'] = offset;
        return this;
    }
}