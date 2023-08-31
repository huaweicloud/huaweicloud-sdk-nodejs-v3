

export class CreateNatGatewaySnatRuleResponseBody {
    public id?: string;
    private 'tenant_id'?: string;
    private 'nat_gateway_id'?: string;
    public cidr?: string;
    private 'source_type'?: number;
    private 'floating_ip_id'?: string;
    public description?: string;
    public status?: CreateNatGatewaySnatRuleResponseBodyStatusEnum | string;
    private 'created_at'?: string;
    private 'network_id'?: string;
    private 'admin_state_up'?: boolean;
    private 'floating_ip_address'?: string;
    public constructor(id?: string, tenantId?: string, natGatewayId?: string, cidr?: string, sourceType?: number, floatingIpId?: string, description?: string, status?: string, createdAt?: string, networkId?: string, adminStateUp?: boolean, floatingIpAddress?: string) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['nat_gateway_id'] = natGatewayId;
        this['cidr'] = cidr;
        this['source_type'] = sourceType;
        this['floating_ip_id'] = floatingIpId;
        this['description'] = description;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['network_id'] = networkId;
        this['admin_state_up'] = adminStateUp;
        this['floating_ip_address'] = floatingIpAddress;
    }
    public withId(id: string): CreateNatGatewaySnatRuleResponseBody {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CreateNatGatewaySnatRuleResponseBody {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withNatGatewayId(natGatewayId: string): CreateNatGatewaySnatRuleResponseBody {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withCidr(cidr: string): CreateNatGatewaySnatRuleResponseBody {
        this['cidr'] = cidr;
        return this;
    }
    public withSourceType(sourceType: number): CreateNatGatewaySnatRuleResponseBody {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withFloatingIpId(floatingIpId: string): CreateNatGatewaySnatRuleResponseBody {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withDescription(description: string): CreateNatGatewaySnatRuleResponseBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: CreateNatGatewaySnatRuleResponseBodyStatusEnum | string): CreateNatGatewaySnatRuleResponseBody {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): CreateNatGatewaySnatRuleResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withNetworkId(networkId: string): CreateNatGatewaySnatRuleResponseBody {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): CreateNatGatewaySnatRuleResponseBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): CreateNatGatewaySnatRuleResponseBody {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNatGatewaySnatRuleResponseBodyStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    EIP_FREEZED = 'EIP_FREEZED',
    INACTIVE = 'INACTIVE'
}
