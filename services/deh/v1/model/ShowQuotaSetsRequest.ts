

export class ShowQuotaSetsRequest {
    private 'tenant_id'?: string;
    public resource?: string;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ShowQuotaSetsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withResource(resource: string): ShowQuotaSetsRequest {
        this['resource'] = resource;
        return this;
    }
}