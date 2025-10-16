

export class ConfirmAsyncJobRequest {
    private 'job_id'?: string;
    public projectid?: string;
    public enterpriseProjectId?: string;
    private 'Content-Type'?: string;
    public constructor(jobId?: string, projectid?: string) { 
        this['job_id'] = jobId;
        this['projectid'] = projectid;
    }
    public withJobId(jobId: string): ConfirmAsyncJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withProjectid(projectid: string): ConfirmAsyncJobRequest {
        this['projectid'] = projectid;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ConfirmAsyncJobRequest {
        this['enterpriseProjectId'] = enterpriseProjectId;
        return this;
    }
    public withContentType(contentType: string): ConfirmAsyncJobRequest {
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