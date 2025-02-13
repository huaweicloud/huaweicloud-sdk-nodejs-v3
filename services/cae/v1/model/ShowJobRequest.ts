

export class ShowJobRequest {
    private 'job_id'?: string;
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    public constructor(jobId?: string, xEnvironmentID?: string) { 
        this['job_id'] = jobId;
        this['X-Environment-ID'] = xEnvironmentID;
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
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): ShowJobRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): ShowJobRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
}