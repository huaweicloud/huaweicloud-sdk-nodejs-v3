

export class NovaSecurityGroupCommonGroup {
    public name?: string;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): NovaSecurityGroupCommonGroup {
        this['name'] = name;
        return this;
    }
    public withTenantId(tenantId: string): NovaSecurityGroupCommonGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}