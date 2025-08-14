

export class ProvisioningTenant {
    private 'creation_time'?: number;
    private 'scim_endpoint'?: string;
    private 'tenant_id'?: string;
    public constructor(creationTime?: number, scimEndpoint?: string, tenantId?: string) { 
        this['creation_time'] = creationTime;
        this['scim_endpoint'] = scimEndpoint;
        this['tenant_id'] = tenantId;
    }
    public withCreationTime(creationTime: number): ProvisioningTenant {
        this['creation_time'] = creationTime;
        return this;
    }
    public set creationTime(creationTime: number  | undefined) {
        this['creation_time'] = creationTime;
    }
    public get creationTime(): number | undefined {
        return this['creation_time'];
    }
    public withScimEndpoint(scimEndpoint: string): ProvisioningTenant {
        this['scim_endpoint'] = scimEndpoint;
        return this;
    }
    public set scimEndpoint(scimEndpoint: string  | undefined) {
        this['scim_endpoint'] = scimEndpoint;
    }
    public get scimEndpoint(): string | undefined {
        return this['scim_endpoint'];
    }
    public withTenantId(tenantId: string): ProvisioningTenant {
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