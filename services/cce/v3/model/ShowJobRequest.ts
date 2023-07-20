

export class ShowJobRequest {
    private 'job_id'?: string;
    private 'Content-Type'?: string;
    public constructor(jobId?: string, contentType?: string) { 
        this['job_id'] = jobId;
        this['Content-Type'] = contentType;
    }
    public withJobId(jobId: string): ShowJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withContentType(contentType: string): ShowJobRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}