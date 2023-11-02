

export class NatGatewayUpdateSnatRuleResponseBody {
    public id?: string;
    private 'tenant_id'?: string;
    private 'nat_gateway_id'?: string;
    private 'source_type'?: number;
    public cidr?: string;
    private 'floating_ip_id'?: string;
    public description?: string;
    public status?: NatGatewayUpdateSnatRuleResponseBodyStatusEnum | string;
    private 'created_at'?: string;
    private 'network_id'?: string;
    private 'admin_state_up'?: boolean;
    private 'floating_ip_address'?: string;
    private 'public_ip_address'?: string;
    private 'global_eip_address'?: string;
    private 'global_eip_id'?: string;
    public constructor(id?: string, tenantId?: string, natGatewayId?: string, sourceType?: number, cidr?: string, floatingIpId?: string, description?: string, status?: string, createdAt?: string, networkId?: string, adminStateUp?: boolean, floatingIpAddress?: string, publicIpAddress?: string, globalEipAddress?: string, globalEipId?: string) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['nat_gateway_id'] = natGatewayId;
        this['source_type'] = sourceType;
        this['cidr'] = cidr;
        this['floating_ip_id'] = floatingIpId;
        this['description'] = description;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['network_id'] = networkId;
        this['admin_state_up'] = adminStateUp;
        this['floating_ip_address'] = floatingIpAddress;
        this['public_ip_address'] = publicIpAddress;
        this['global_eip_address'] = globalEipAddress;
        this['global_eip_id'] = globalEipId;
    }
    public withId(id: string): NatGatewayUpdateSnatRuleResponseBody {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): NatGatewayUpdateSnatRuleResponseBody {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withNatGatewayId(natGatewayId: string): NatGatewayUpdateSnatRuleResponseBody {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withSourceType(sourceType: number): NatGatewayUpdateSnatRuleResponseBody {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withCidr(cidr: string): NatGatewayUpdateSnatRuleResponseBody {
        this['cidr'] = cidr;
        return this;
    }
    public withFloatingIpId(floatingIpId: string): NatGatewayUpdateSnatRuleResponseBody {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withDescription(description: string): NatGatewayUpdateSnatRuleResponseBody {
        this['description'] = description;
        return this;
    }
    public withStatus(status: NatGatewayUpdateSnatRuleResponseBodyStatusEnum | string): NatGatewayUpdateSnatRuleResponseBody {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): NatGatewayUpdateSnatRuleResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withNetworkId(networkId: string): NatGatewayUpdateSnatRuleResponseBody {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): NatGatewayUpdateSnatRuleResponseBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): NatGatewayUpdateSnatRuleResponseBody {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withPublicIpAddress(publicIpAddress: string): NatGatewayUpdateSnatRuleResponseBody {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
    public withGlobalEipAddress(globalEipAddress: string): NatGatewayUpdateSnatRuleResponseBody {
        this['global_eip_address'] = globalEipAddress;
        return this;
    }
    public set globalEipAddress(globalEipAddress: string  | undefined) {
        this['global_eip_address'] = globalEipAddress;
    }
    public get globalEipAddress(): string | undefined {
        return this['global_eip_address'];
    }
    public withGlobalEipId(globalEipId: string): NatGatewayUpdateSnatRuleResponseBody {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NatGatewayUpdateSnatRuleResponseBodyStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    EIP_FREEZED = 'EIP_FREEZED',
    INACTIVE = 'INACTIVE'
}
