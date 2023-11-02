

export class NatGatewayDnatRuleResponseBody {
    public id?: string;
    private 'tenant_id'?: string;
    public description?: string;
    private 'port_id'?: string;
    private 'private_ip'?: string;
    private 'internal_service_port'?: number;
    private 'nat_gateway_id'?: string;
    private 'floating_ip_id'?: string;
    private 'floating_ip_address'?: string;
    private 'external_service_port'?: number;
    public status?: NatGatewayDnatRuleResponseBodyStatusEnum | string;
    private 'admin_state_up'?: boolean;
    private 'internal_service_port_range'?: string;
    private 'external_service_port_range'?: string;
    public protocol?: NatGatewayDnatRuleResponseBodyProtocolEnum | string;
    private 'created_at'?: string;
    private 'global_eip_id'?: string;
    private 'global_eip_address'?: string;
    public constructor(id?: string, tenantId?: string, description?: string, internalServicePort?: number, natGatewayId?: string, floatingIpId?: string, floatingIpAddress?: string, externalServicePort?: number, status?: string, adminStateUp?: boolean, protocol?: string, createdAt?: string, globalEipId?: string, globalEipAddress?: string) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['description'] = description;
        this['internal_service_port'] = internalServicePort;
        this['nat_gateway_id'] = natGatewayId;
        this['floating_ip_id'] = floatingIpId;
        this['floating_ip_address'] = floatingIpAddress;
        this['external_service_port'] = externalServicePort;
        this['status'] = status;
        this['admin_state_up'] = adminStateUp;
        this['protocol'] = protocol;
        this['created_at'] = createdAt;
        this['global_eip_id'] = globalEipId;
        this['global_eip_address'] = globalEipAddress;
    }
    public withId(id: string): NatGatewayDnatRuleResponseBody {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): NatGatewayDnatRuleResponseBody {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDescription(description: string): NatGatewayDnatRuleResponseBody {
        this['description'] = description;
        return this;
    }
    public withPortId(portId: string): NatGatewayDnatRuleResponseBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPrivateIp(privateIp: string): NatGatewayDnatRuleResponseBody {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withInternalServicePort(internalServicePort: number): NatGatewayDnatRuleResponseBody {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: number  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): number | undefined {
        return this['internal_service_port'];
    }
    public withNatGatewayId(natGatewayId: string): NatGatewayDnatRuleResponseBody {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withFloatingIpId(floatingIpId: string): NatGatewayDnatRuleResponseBody {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): NatGatewayDnatRuleResponseBody {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withExternalServicePort(externalServicePort: number): NatGatewayDnatRuleResponseBody {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
    public withStatus(status: NatGatewayDnatRuleResponseBodyStatusEnum | string): NatGatewayDnatRuleResponseBody {
        this['status'] = status;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NatGatewayDnatRuleResponseBody {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withInternalServicePortRange(internalServicePortRange: string): NatGatewayDnatRuleResponseBody {
        this['internal_service_port_range'] = internalServicePortRange;
        return this;
    }
    public set internalServicePortRange(internalServicePortRange: string  | undefined) {
        this['internal_service_port_range'] = internalServicePortRange;
    }
    public get internalServicePortRange(): string | undefined {
        return this['internal_service_port_range'];
    }
    public withExternalServicePortRange(externalServicePortRange: string): NatGatewayDnatRuleResponseBody {
        this['external_service_port_range'] = externalServicePortRange;
        return this;
    }
    public set externalServicePortRange(externalServicePortRange: string  | undefined) {
        this['external_service_port_range'] = externalServicePortRange;
    }
    public get externalServicePortRange(): string | undefined {
        return this['external_service_port_range'];
    }
    public withProtocol(protocol: NatGatewayDnatRuleResponseBodyProtocolEnum | string): NatGatewayDnatRuleResponseBody {
        this['protocol'] = protocol;
        return this;
    }
    public withCreatedAt(createdAt: string): NatGatewayDnatRuleResponseBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withGlobalEipId(globalEipId: string): NatGatewayDnatRuleResponseBody {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withGlobalEipAddress(globalEipAddress: string): NatGatewayDnatRuleResponseBody {
        this['global_eip_address'] = globalEipAddress;
        return this;
    }
    public set globalEipAddress(globalEipAddress: string  | undefined) {
        this['global_eip_address'] = globalEipAddress;
    }
    public get globalEipAddress(): string | undefined {
        return this['global_eip_address'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NatGatewayDnatRuleResponseBodyStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    EIP_FREEZED = 'EIP_FREEZED',
    INACTIVE = 'INACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum NatGatewayDnatRuleResponseBodyProtocolEnum {
    TCP = 'tcp',
    UDP = 'udp',
    ANY = 'any'
}
