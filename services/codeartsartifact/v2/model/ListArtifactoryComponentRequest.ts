

export class ListArtifactoryComponentRequest {
    private 'tenant_id'?: string;
    private 'repo_name'?: string;
    public path?: string;
    public format?: string;
    private 'instance_id'?: string;
    public constructor(tenantId?: string, repoName?: string, path?: string, format?: string) { 
        this['tenant_id'] = tenantId;
        this['repo_name'] = repoName;
        this['path'] = path;
        this['format'] = format;
    }
    public withTenantId(tenantId: string): ListArtifactoryComponentRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRepoName(repoName: string): ListArtifactoryComponentRequest {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withPath(path: string): ListArtifactoryComponentRequest {
        this['path'] = path;
        return this;
    }
    public withFormat(format: string): ListArtifactoryComponentRequest {
        this['format'] = format;
        return this;
    }
    public withInstanceId(instanceId: string): ListArtifactoryComponentRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}