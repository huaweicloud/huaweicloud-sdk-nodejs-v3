

export class ShowFileTreeRequest {
    private 'tenant_id'?: string;
    private 'repo_name'?: string;
    public path?: string;
    private 'instance_id'?: string;
    private 'is_recycle_bin'?: boolean;
    public constructor(tenantId?: string, repoName?: string, path?: string) { 
        this['tenant_id'] = tenantId;
        this['repo_name'] = repoName;
        this['path'] = path;
    }
    public withTenantId(tenantId: string): ShowFileTreeRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withRepoName(repoName: string): ShowFileTreeRequest {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withPath(path: string): ShowFileTreeRequest {
        this['path'] = path;
        return this;
    }
    public withInstanceId(instanceId: string): ShowFileTreeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIsRecycleBin(isRecycleBin: boolean): ShowFileTreeRequest {
        this['is_recycle_bin'] = isRecycleBin;
        return this;
    }
    public set isRecycleBin(isRecycleBin: boolean  | undefined) {
        this['is_recycle_bin'] = isRecycleBin;
    }
    public get isRecycleBin(): boolean | undefined {
        return this['is_recycle_bin'];
    }
}