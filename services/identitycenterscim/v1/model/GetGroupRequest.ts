

export class GetGroupRequest {
    private 'Authorization'?: string;
    private 'tenant_id'?: string;
    private 'group_id'?: string;
    public constructor(authorization?: string, tenantId?: string, groupId?: string) { 
        this['Authorization'] = authorization;
        this['tenant_id'] = tenantId;
        this['group_id'] = groupId;
    }
    public withAuthorization(authorization: string): GetGroupRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withTenantId(tenantId: string): GetGroupRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGroupId(groupId: string): GetGroupRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
}