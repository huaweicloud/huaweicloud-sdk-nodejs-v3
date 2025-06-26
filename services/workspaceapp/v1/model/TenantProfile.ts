

export class TenantProfile {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'tenant_domain_id'?: string;
    private 'service_status'?: string;
    private 'open_with_ad'?: boolean;
    private 'tenant_domain_name'?: string;
    private 'create_time'?: Date;
    public constructor() { 
    }
    public withProjectId(projectId: string): TenantProfile {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): TenantProfile {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withTenantDomainId(tenantDomainId: string): TenantProfile {
        this['tenant_domain_id'] = tenantDomainId;
        return this;
    }
    public set tenantDomainId(tenantDomainId: string  | undefined) {
        this['tenant_domain_id'] = tenantDomainId;
    }
    public get tenantDomainId(): string | undefined {
        return this['tenant_domain_id'];
    }
    public withServiceStatus(serviceStatus: string): TenantProfile {
        this['service_status'] = serviceStatus;
        return this;
    }
    public set serviceStatus(serviceStatus: string  | undefined) {
        this['service_status'] = serviceStatus;
    }
    public get serviceStatus(): string | undefined {
        return this['service_status'];
    }
    public withOpenWithAd(openWithAd: boolean): TenantProfile {
        this['open_with_ad'] = openWithAd;
        return this;
    }
    public set openWithAd(openWithAd: boolean  | undefined) {
        this['open_with_ad'] = openWithAd;
    }
    public get openWithAd(): boolean | undefined {
        return this['open_with_ad'];
    }
    public withTenantDomainName(tenantDomainName: string): TenantProfile {
        this['tenant_domain_name'] = tenantDomainName;
        return this;
    }
    public set tenantDomainName(tenantDomainName: string  | undefined) {
        this['tenant_domain_name'] = tenantDomainName;
    }
    public get tenantDomainName(): string | undefined {
        return this['tenant_domain_name'];
    }
    public withCreateTime(createTime: Date): TenantProfile {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
}