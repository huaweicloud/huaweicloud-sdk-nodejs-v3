

export class ServerRoceNetwork {
    public id?: string;
    public name?: string;
    private 'project_id'?: string;
    public status?: string;
    private 'tenant_id'?: string;
    public subnets?: string;
    private 'provider:network_type'?: string;
    private 'provider:physical_network'?: string;
    public constructor() { 
    }
    public withId(id: string): ServerRoceNetwork {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ServerRoceNetwork {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ServerRoceNetwork {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): ServerRoceNetwork {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): ServerRoceNetwork {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withSubnets(subnets: string): ServerRoceNetwork {
        this['subnets'] = subnets;
        return this;
    }
    public withProviderNetworkType(providerNetworkType: string): ServerRoceNetwork {
        this['provider:network_type'] = providerNetworkType;
        return this;
    }
    public set providerNetworkType(providerNetworkType: string  | undefined) {
        this['provider:network_type'] = providerNetworkType;
    }
    public get providerNetworkType(): string | undefined {
        return this['provider:network_type'];
    }
    public withProviderPhysicalNetwork(providerPhysicalNetwork: string): ServerRoceNetwork {
        this['provider:physical_network'] = providerPhysicalNetwork;
        return this;
    }
    public set providerPhysicalNetwork(providerPhysicalNetwork: string  | undefined) {
        this['provider:physical_network'] = providerPhysicalNetwork;
    }
    public get providerPhysicalNetwork(): string | undefined {
        return this['provider:physical_network'];
    }
}