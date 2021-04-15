

export class ShowJobRequest {
    private 'job_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(jobId?: any, contentType?: any) { 
        this['job_id'] = jobId;
        this['Content-Type'] = contentType;
    }
    public withJobId(jobId: string): ShowJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withContentType(contentType: string): ShowJobRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}