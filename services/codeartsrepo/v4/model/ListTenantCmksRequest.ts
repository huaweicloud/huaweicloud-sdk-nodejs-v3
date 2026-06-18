

export class ListTenantCmksRequest {
    private 'tenant_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ListTenantCmksRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withOffset(offset: number): ListTenantCmksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTenantCmksRequest {
        this['limit'] = limit;
        return this;
    }
}