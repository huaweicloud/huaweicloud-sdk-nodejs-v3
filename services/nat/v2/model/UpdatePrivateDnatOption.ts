

export class UpdatePrivateDnatOption {
    public description?: string;
    private 'transit_ip_id'?: string;
    private 'transit_ip_address'?: string;
    private 'network_interface_id'?: string;
    private 'private_ip_address'?: string;
    public protocol?: UpdatePrivateDnatOptionProtocolEnum | string;
    private 'internal_service_port'?: string;
    private 'transit_service_port'?: string;
    public constructor() { 
    }
    public withDescription(description: string): UpdatePrivateDnatOption {
        this['description'] = description;
        return this;
    }
    public withTransitIpId(transitIpId: string): UpdatePrivateDnatOption {
        this['transit_ip_id'] = transitIpId;
        return this;
    }
    public set transitIpId(transitIpId: string  | undefined) {
        this['transit_ip_id'] = transitIpId;
    }
    public get transitIpId(): string | undefined {
        return this['transit_ip_id'];
    }
    public withTransitIpAddress(transitIpAddress: string): UpdatePrivateDnatOption {
        this['transit_ip_address'] = transitIpAddress;
        return this;
    }
    public set transitIpAddress(transitIpAddress: string  | undefined) {
        this['transit_ip_address'] = transitIpAddress;
    }
    public get transitIpAddress(): string | undefined {
        return this['transit_ip_address'];
    }
    public withNetworkInterfaceId(networkInterfaceId: string): UpdatePrivateDnatOption {
        this['network_interface_id'] = networkInterfaceId;
        return this;
    }
    public set networkInterfaceId(networkInterfaceId: string  | undefined) {
        this['network_interface_id'] = networkInterfaceId;
    }
    public get networkInterfaceId(): string | undefined {
        return this['network_interface_id'];
    }
    public withPrivateIpAddress(privateIpAddress: string): UpdatePrivateDnatOption {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withProtocol(protocol: UpdatePrivateDnatOptionProtocolEnum | string): UpdatePrivateDnatOption {
        this['protocol'] = protocol;
        return this;
    }
    public withInternalServicePort(internalServicePort: string): UpdatePrivateDnatOption {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: string  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): string | undefined {
        return this['internal_service_port'];
    }
    public withTransitServicePort(transitServicePort: string): UpdatePrivateDnatOption {
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
export enum UpdatePrivateDnatOptionProtocolEnum {
    TCP = 'tcp',
    UDP = 'udp',
    ANY = 'any'
}
