

export class PoolMetaLabels {
    private 'os.modelarts/name'?: string;
    private 'os.modelarts/workspace.id'?: string;
    private 'os.modelarts/node.prefix'?: string;
    private 'os.modelarts/resource.id'?: string;
    private 'os.modelarts/tenant.domain.id'?: string;
    private 'os.modelarts/tenant.project.id'?: string;
    private 'os.modelarts/enterprise.project.id'?: string;
    private 'os.modelarts.pool/biz'?: string;
    private 'os.modelarts/create-from'?: string;
    private 'os.modelarts/nobilling'?: string;
    private 'os.modelarts/order.name'?: string;
    private 'os.modelarts/region'?: string;
    public constructor() { 
    }
    public withOsModelartsName(osModelartsName: string): PoolMetaLabels {
        this['os.modelarts/name'] = osModelartsName;
        return this;
    }
    public set osModelartsName(osModelartsName: string  | undefined) {
        this['os.modelarts/name'] = osModelartsName;
    }
    public get osModelartsName(): string | undefined {
        return this['os.modelarts/name'];
    }
    public withOsModelartsWorkspaceId(osModelartsWorkspaceId: string): PoolMetaLabels {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
        return this;
    }
    public set osModelartsWorkspaceId(osModelartsWorkspaceId: string  | undefined) {
        this['os.modelarts/workspace.id'] = osModelartsWorkspaceId;
    }
    public get osModelartsWorkspaceId(): string | undefined {
        return this['os.modelarts/workspace.id'];
    }
    public withOsModelartsNodePrefix(osModelartsNodePrefix: string): PoolMetaLabels {
        this['os.modelarts/node.prefix'] = osModelartsNodePrefix;
        return this;
    }
    public set osModelartsNodePrefix(osModelartsNodePrefix: string  | undefined) {
        this['os.modelarts/node.prefix'] = osModelartsNodePrefix;
    }
    public get osModelartsNodePrefix(): string | undefined {
        return this['os.modelarts/node.prefix'];
    }
    public withOsModelartsResourceId(osModelartsResourceId: string): PoolMetaLabels {
        this['os.modelarts/resource.id'] = osModelartsResourceId;
        return this;
    }
    public set osModelartsResourceId(osModelartsResourceId: string  | undefined) {
        this['os.modelarts/resource.id'] = osModelartsResourceId;
    }
    public get osModelartsResourceId(): string | undefined {
        return this['os.modelarts/resource.id'];
    }
    public withOsModelartsTenantDomainId(osModelartsTenantDomainId: string): PoolMetaLabels {
        this['os.modelarts/tenant.domain.id'] = osModelartsTenantDomainId;
        return this;
    }
    public set osModelartsTenantDomainId(osModelartsTenantDomainId: string  | undefined) {
        this['os.modelarts/tenant.domain.id'] = osModelartsTenantDomainId;
    }
    public get osModelartsTenantDomainId(): string | undefined {
        return this['os.modelarts/tenant.domain.id'];
    }
    public withOsModelartsTenantProjectId(osModelartsTenantProjectId: string): PoolMetaLabels {
        this['os.modelarts/tenant.project.id'] = osModelartsTenantProjectId;
        return this;
    }
    public set osModelartsTenantProjectId(osModelartsTenantProjectId: string  | undefined) {
        this['os.modelarts/tenant.project.id'] = osModelartsTenantProjectId;
    }
    public get osModelartsTenantProjectId(): string | undefined {
        return this['os.modelarts/tenant.project.id'];
    }
    public withOsModelartsEnterpriseProjectId(osModelartsEnterpriseProjectId: string): PoolMetaLabels {
        this['os.modelarts/enterprise.project.id'] = osModelartsEnterpriseProjectId;
        return this;
    }
    public set osModelartsEnterpriseProjectId(osModelartsEnterpriseProjectId: string  | undefined) {
        this['os.modelarts/enterprise.project.id'] = osModelartsEnterpriseProjectId;
    }
    public get osModelartsEnterpriseProjectId(): string | undefined {
        return this['os.modelarts/enterprise.project.id'];
    }
    public withOsModelartsPoolBiz(osModelartsPoolBiz: string): PoolMetaLabels {
        this['os.modelarts.pool/biz'] = osModelartsPoolBiz;
        return this;
    }
    public set osModelartsPoolBiz(osModelartsPoolBiz: string  | undefined) {
        this['os.modelarts.pool/biz'] = osModelartsPoolBiz;
    }
    public get osModelartsPoolBiz(): string | undefined {
        return this['os.modelarts.pool/biz'];
    }
    public withOsModelartsCreateFrom(osModelartsCreateFrom: string): PoolMetaLabels {
        this['os.modelarts/create-from'] = osModelartsCreateFrom;
        return this;
    }
    public set osModelartsCreateFrom(osModelartsCreateFrom: string  | undefined) {
        this['os.modelarts/create-from'] = osModelartsCreateFrom;
    }
    public get osModelartsCreateFrom(): string | undefined {
        return this['os.modelarts/create-from'];
    }
    public withOsModelartsNobilling(osModelartsNobilling: string): PoolMetaLabels {
        this['os.modelarts/nobilling'] = osModelartsNobilling;
        return this;
    }
    public set osModelartsNobilling(osModelartsNobilling: string  | undefined) {
        this['os.modelarts/nobilling'] = osModelartsNobilling;
    }
    public get osModelartsNobilling(): string | undefined {
        return this['os.modelarts/nobilling'];
    }
    public withOsModelartsOrderName(osModelartsOrderName: string): PoolMetaLabels {
        this['os.modelarts/order.name'] = osModelartsOrderName;
        return this;
    }
    public set osModelartsOrderName(osModelartsOrderName: string  | undefined) {
        this['os.modelarts/order.name'] = osModelartsOrderName;
    }
    public get osModelartsOrderName(): string | undefined {
        return this['os.modelarts/order.name'];
    }
    public withOsModelartsRegion(osModelartsRegion: string): PoolMetaLabels {
        this['os.modelarts/region'] = osModelartsRegion;
        return this;
    }
    public set osModelartsRegion(osModelartsRegion: string  | undefined) {
        this['os.modelarts/region'] = osModelartsRegion;
    }
    public get osModelartsRegion(): string | undefined {
        return this['os.modelarts/region'];
    }
}