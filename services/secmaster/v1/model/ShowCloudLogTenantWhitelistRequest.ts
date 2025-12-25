

export class ShowCloudLogTenantWhitelistRequest {
    private 'workspace_id'?: string;
    private 'domain_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public constructor(workspaceId?: string, domainId?: string) { 
        this['workspace_id'] = workspaceId;
        this['domain_id'] = domainId;
    }
    public withWorkspaceId(workspaceId: string): ShowCloudLogTenantWhitelistRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withDomainId(domainId: string): ShowCloudLogTenantWhitelistRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOffset(offset: number): ShowCloudLogTenantWhitelistRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowCloudLogTenantWhitelistRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortDir(sortDir: string): ShowCloudLogTenantWhitelistRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ShowCloudLogTenantWhitelistRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
}