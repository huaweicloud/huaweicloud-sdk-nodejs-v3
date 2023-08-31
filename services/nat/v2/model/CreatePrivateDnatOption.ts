

export class CreatePrivateDnatOption {
    public description?: string;
    private 'transit_ip_id'?: string;
    private 'network_interface_id'?: string;
    private 'gateway_id'?: string;
    public protocol?: CreatePrivateDnatOptionProtocolEnum | string;
    private 'private_ip_address'?: string;
    private 'internal_service_port'?: string;
    private 'transit_service_port'?: string;
    public constructor(transitIpId?: string, gatewayId?: string) { 
        this['transit_ip_id'] = transitIpId;
        this['gateway_id'] = gatewayId;
    }
    public withDescription(description: string): CreatePrivateDnatOption {
        this['description'] = description;
        return this;
    }
    public withTransitIpId(transitIpId: string): CreatePrivateDnatOption {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: string  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): string | undefined {
        return this['transit_ip_id'];
    }
    public withNetworkInterfaceId(networkInterfaceId: string): CreatePrivateDnatOption {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: string  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): string | undefined {
        return this['network_interface_id'];
    }
    public withGatewayId(gatewayId: string): CreatePrivateDnatOption {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withProtocol(protocol: CreatePrivateDnatOptionProtocolEnum | string): CreatePrivateDnatOption {
        this['protocol'] = protocol;
        return this;
    }
    public withPrivateIpAddress(privateIpAddress: string): CreatePrivateDnatOption {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withInternalServicePort(internalServicePort: string): CreatePrivateDnatOption {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: string  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): string | undefined {
        return this['internal_service_port'];
    }
    public withTransitServicePort(transitServicePort: string): CreatePrivateDnatOption {
        this['transit_service_port'] = transitServicePort;
        return this;
    }
    public set transitServicePort(transitServicePort: string  | undefined) {
        this['transit_service_port'] = transitServicePort;
    }
    public get transitServicePort(): string | undefined {
        return this['transit_service_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatePrivateDnatOptionProtocolEnum {
    TCP = 'tcp',
    UDP = 'udp',
    ANY = 'any'
}
