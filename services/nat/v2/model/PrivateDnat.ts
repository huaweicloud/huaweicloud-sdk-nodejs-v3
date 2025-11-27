

export class PrivateDnat {
    public id?: string;
    private 'project_id'?: string;
    public description?: string;
    private 'transit_ip_id'?: string;
    private 'transit_ip_address'?: string;
    private 'gateway_id'?: string;
    private 'network_interface_id'?: string;
    public type?: string;
    public protocol?: PrivateDnatProtocolEnum | string;
    private 'private_ip_address'?: string;
    private 'internal_service_port'?: string;
    private 'transit_service_port'?: string;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public status?: PrivateDnatStatusEnum | string;
    public constructor() { 
    }
    public withId(id: string): PrivateDnat {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): PrivateDnat {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): PrivateDnat {
        this['description'] = description;
        return this;
    }
    public withTransitIpId(transitIpId: string): PrivateDnat {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: string  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): string | undefined {
        return this['transit_ip_id'];
    }
    public withTransitIpAddress(transitIpAddress: string): PrivateDnat {
        this['transit_ip_address'] = transitIpAddress;
        return this;
    }
    public set transitIpAddress(transitIpAddress: string  | undefined) {
        this['transit_ip_address'] = transitIpAddress;
    }
    public get transitIpAddress(): string | undefined {
        return this['transit_ip_address'];
    }
    public withGatewayId(gatewayId: string): PrivateDnat {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withNetworkInterfaceId(networkInterfaceId: string): PrivateDnat {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: string  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): string | undefined {
        return this['network_interface_id'];
    }
    public withType(type: string): PrivateDnat {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: PrivateDnatProtocolEnum | string): PrivateDnat {
        this['protocol'] = protocol;
        return this;
    }
    public withPrivateIpAddress(privateIpAddress: string): PrivateDnat {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withInternalServicePort(internalServicePort: string): PrivateDnat {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: string  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): string | undefined {
        return this['internal_service_port'];
    }
    public withTransitServicePort(transitServicePort: string): PrivateDnat {
        this['transit_service_port'] = transitServicePort;
        return this;
    }
    public set transitServicePort(transitServicePort: string  | undefined) {
        this['transit_service_port'] = transitServicePort;
    }
    public get transitServicePort(): string | undefined {
        return this['transit_service_port'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): PrivateDnat {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: Date): PrivateDnat {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PrivateDnat {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withStatus(status: PrivateDnatStatusEnum | string): PrivateDnat {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivateDnatProtocolEnum {
    TCP = 'tcp',
    UDP = 'udp',
    ANY = 'any'
}
/**
    * @export
    * @enum {string}
    */
export enum PrivateDnatStatusEnum {
    ACTIVE = 'ACTIVE',
    FROZEN = 'FROZEN',
    INACTIVE = 'INACTIVE'
}
