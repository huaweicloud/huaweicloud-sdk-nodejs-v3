

export class ShowEncryptFileRequest {
    private 'tenant_id'?: string;
    private 'job_id'?: string;
    private 'once_token'?: string;
    public constructor(tenantId?: string, jobId?: string, onceToken?: string) { 
        this['tenant_id'] = tenantId;
        this['job_id'] = jobId;
        this['once_token'] = onceToken;
    }
    public withTenantId(tenantId: string): ShowEncryptFileRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withJobId(jobId: string): ShowEncryptFileRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOnceToken(onceToken: string): ShowEncryptFileRequest {
        this['once_token'] = onceToken;
        return this;
    }
    public set onceToken(onceToken: string  | undefined) {
        this['once_token'] = onceToken;
    }
    public get onceToken(): string | undefined {
        return this['once_token'];
    }
}