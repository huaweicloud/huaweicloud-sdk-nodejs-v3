

export class NatGateway {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    public spec?: string;
    public status?: string;
    private 'admin_state_up'?: string;
    private 'created_at'?: string;
    private 'router_id'?: string;
    private 'internal_network_id'?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): NatGateway {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): NatGateway {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): NatGateway {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NatGateway {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: string): NatGateway {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: string): NatGateway {
        this['status'] = status;
        return this;
    }
    public withAdminStateUp(adminStateUp: string): NatGateway {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: string  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): string | undefined {
        return this['admin_state_up'];
    }
    public withCreatedAt(createdAt: string): NatGateway {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withRouterId(routerId: string): NatGateway {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withInternalNetworkId(internalNetworkId: string): NatGateway {
        this['internal_network_id'] = internalNetworkId;
        return this;
    }
    public set internalNetworkId(internalNetworkId: string  | undefined) {
        this['internal_network_id'] = internalNetworkId;
    }
    public get internalNetworkId(): string | undefined {
        return this['internal_network_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NatGateway {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}