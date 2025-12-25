

export class CloudLogManagerVo {
    private 'tenant_managed_domain_id'?: string;
    private 'platform_managed_domain_id'?: string;
    private 'dw_region'?: string;
    public constructor() { 
    }
    public withTenantManagedDomainId(tenantManagedDomainId: string): CloudLogManagerVo {
        this['tenant_managed_domain_id'] = tenantManagedDomainId;
        return this;
    }
    public set tenantManagedDomainId(tenantManagedDomainId: string  | undefined) {
        this['tenant_managed_domain_id'] = tenantManagedDomainId;
    }
    public get tenantManagedDomainId(): string | undefined {
        return this['tenant_managed_domain_id'];
    }
    public withPlatformManagedDomainId(platformManagedDomainId: string): CloudLogManagerVo {
        this['platform_managed_domain_id'] = platformManagedDomainId;
        return this;
    }
    public set platformManagedDomainId(platformManagedDomainId: string  | undefined) {
        this['platform_managed_domain_id'] = platformManagedDomainId;
    }
    public get platformManagedDomainId(): string | undefined {
        return this['platform_managed_domain_id'];
    }
    public withDwRegion(dwRegion: string): CloudLogManagerVo {
        this['dw_region'] = dwRegion;
        return this;
    }
    public set dwRegion(dwRegion: string  | undefined) {
        this['dw_region'] = dwRegion;
    }
    public get dwRegion(): string | undefined {
        return this['dw_region'];
    }
}