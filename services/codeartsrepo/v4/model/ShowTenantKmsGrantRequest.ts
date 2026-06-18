

export class ShowTenantKmsGrantRequest {
    private 'tenant_id'?: string;
    public constructor(tenantId?: string) { 
        this['tenant_id'] = tenantId;
    }
    public withTenantId(tenantId: string): ShowTenantKmsGrantRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}