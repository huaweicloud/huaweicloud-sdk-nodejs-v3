

export class DNatInfoResult {
    private 'node_id'?: string;
    private 'nat_gateway_id'?: string;
    private 'port_id'?: string;
    private 'public_ip_id'?: string;
    private 'public_ip'?: string;
    private 'external_service_port'?: number;
    private 'internal_service_port'?: number;
    private 'private_ip'?: string;
    public constructor() { 
    }
    public withNodeId(nodeId: string): DNatInfoResult {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNatGatewayId(natGatewayId: string): DNatInfoResult {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: string  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): string | undefined {
        return this['nat_gateway_id'];
    }
    public withPortId(portId: string): DNatInfoResult {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPublicIpId(publicIpId: string): DNatInfoResult {
        this['public_ip_id'] = publicIpId;
        return this;
    }
    public set publicIpId(publicIpId: string  | undefined) {
        this['public_ip_id'] = publicIpId;
    }
    public get publicIpId(): string | undefined {
        return this['public_ip_id'];
    }
    public withPublicIp(publicIp: string): DNatInfoResult {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withExternalServicePort(externalServicePort: number): DNatInfoResult {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
    public withInternalServicePort(internalServicePort: number): DNatInfoResult {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: number  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): number | undefined {
        return this['internal_service_port'];
    }
    public withPrivateIp(privateIp: string): DNatInfoResult {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
}