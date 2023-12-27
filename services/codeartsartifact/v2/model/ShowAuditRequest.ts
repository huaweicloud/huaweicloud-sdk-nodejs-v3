

export class ShowAuditRequest {
    private 'tenant_id'?: string;
    public module?: string;
    public repo?: string;
    private 'user_id'?: string;
    private 'instance_id'?: string;
    private 'page_num'?: number;
    private 'page_size'?: number;
    public constructor(tenantId?: string, module?: string, repo?: string) { 
        this['tenant_id'] = tenantId;
        this['module'] = module;
        this['repo'] = repo;
    }
    public withTenantId(tenantId: string): ShowAuditRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withModule(module: string): ShowAuditRequest {
        this['module'] = module;
        return this;
    }
    public withRepo(repo: string): ShowAuditRequest {
        this['repo'] = repo;
        return this;
    }
    public withUserId(userId: string): ShowAuditRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withInstanceId(instanceId: string): ShowAuditRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPageNum(pageNum: number): ShowAuditRequest {
        this['page_num'] = pageNum;
        return this;
    }
    public set pageNum(pageNum: number  | undefined) {
        this['page_num'] = pageNum;
    }
    public get pageNum(): number | undefined {
        return this['page_num'];
    }
    public withPageSize(pageSize: number): ShowAuditRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
}