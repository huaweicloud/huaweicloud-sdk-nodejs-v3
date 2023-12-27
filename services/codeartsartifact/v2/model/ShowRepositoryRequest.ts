

export class ShowRepositoryRequest {
    private 'tenant_id'?: string;
    private 'repo_id'?: string;
    public region?: string;
    public constructor(tenantId?: string, repoId?: string) { 
        this['tenant_id'] = tenantId;
        this['repo_id'] = repoId;
    }
    public withTenantId(tenantId: string): ShowRepositoryRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRepoId(repoId: string): ShowRepositoryRequest {
        this['repo_id'] = repoId;
        return this;
    }
    public set repoId(repoId: string  | undefined) {
        this['repo_id'] = repoId;
    }
    public get repoId(): string | undefined {
        return this['repo_id'];
    }
    public withRegion(region: string): ShowRepositoryRequest {
        this['region'] = region;
        return this;
    }
}