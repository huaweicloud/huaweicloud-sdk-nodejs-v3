

export class UpdateNatGatewayDnatRuleOption {
    private 'nat_gateway_id'?: string;
    public description?: string;
    private 'port_id'?: string;
    private 'private_ip'?: string;
    public protocol?: UpdateNatGatewayDnatRuleOptionProtocolEnum | string;
    private 'floating_ip_id'?: string;
    private 'internal_service_port'?: number;
    private 'external_service_port'?: number;
    private 'internal_service_port_range'?: string;
    private 'external_service_port_range'?: string;
    public constructor(natGatewayId?: string) { 
        this['nat_gateway_id'] = natGatewayId;
    }
    public withNatGatewayId(natGatewayId: string): UpdateNatGatewayDnatRuleOption {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withDescription(description: string): UpdateNatGatewayDnatRuleOption {
        this['description'] = description;
        return this;
    }
    public withPortId(portId: string): UpdateNatGatewayDnatRuleOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPrivateIp(privateIp: string): UpdateNatGatewayDnatRuleOption {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withProtocol(protocol: UpdateNatGatewayDnatRuleOptionProtocolEnum | string): UpdateNatGatewayDnatRuleOption {
        this['protocol'] = protocol;
        return this;
    }
    public withFloatingIpId(floatingIpId: string): UpdateNatGatewayDnatRuleOption {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withInternalServicePort(internalServicePort: number): UpdateNatGatewayDnatRuleOption {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: number  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): number | undefined {
        return this['internal_service_port'];
    }
    public withExternalServicePort(externalServicePort: number): UpdateNatGatewayDnatRuleOption {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
    public withInternalServicePortRange(internalServicePortRange: string): UpdateNatGatewayDnatRuleOption {
        this['internal_service_port_range'] = internalServicePortRange;
        return this;
    }
    public set internalServicePortRange(internalServicePortRange: string  | undefined) {
        this['internal_service_port_range'] = internalServicePortRange;
    }
    public get internalServicePortRange(): string | undefined {
        return this['internal_service_port_range'];
    }
    public withExternalServicePortRange(externalServicePortRange: string): UpdateNatGatewayDnatRuleOption {
        this['external_service_port_range'] = externalServicePortRange;
        return this;
    }
    public set externalServicePortRange(externalServicePortRange: string  | undefined) {
        this['external_service_port_range'] = externalServicePortRange;
    }
    public get externalServicePortRange(): string | undefined {
        return this['external_service_port_range'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNatGatewayDnatRuleOptionProtocolEnum {
    TCP = 'TCP',
    UDP = 'UDP',
    ANY = 'ANY'
}
