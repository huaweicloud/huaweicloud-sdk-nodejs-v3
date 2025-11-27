

export class ListNatGatewayDnatRulesRequest {
    private 'admin_state_up'?: boolean;
    private 'external_service_port'?: number;
    private 'floating_ip_address'?: string;
    private 'global_eip_address'?: string;
    public status?: Array<ListNatGatewayDnatRulesRequestStatusEnum> | Array<string>;
    private 'floating_ip_id'?: string;
    private 'global_eip_id'?: string;
    private 'internal_service_port'?: number;
    public limit?: number;
    public id?: string;
    public description?: string;
    private 'created_at'?: Date;
    private 'nat_gateway_id'?: Array<string>;
    private 'port_id'?: string;
    private 'private_ip'?: string;
    public protocol?: Array<string>;
    public marker?: string;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): ListNatGatewayDnatRulesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withExternalServicePort(externalServicePort: number): ListNatGatewayDnatRulesRequest {
        this['external_service_port'] = externalServicePort;
        return this;
    }
    public set externalServicePort(externalServicePort: number  | undefined) {
        this['external_service_port'] = externalServicePort;
    }
    public get externalServicePort(): number | undefined {
        return this['external_service_port'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): ListNatGatewayDnatRulesRequest {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withGlobalEipAddress(globalEipAddress: string): ListNatGatewayDnatRulesRequest {
        this['global_eip_address'] = globalEipAddress;
        return this;
    }
    public set globalEipAddress(globalEipAddress: string  | undefined) {
        this['global_eip_address'] = globalEipAddress;
    }
    public get globalEipAddress(): string | undefined {
        return this['global_eip_address'];
    }
    public withStatus(status: Array<ListNatGatewayDnatRulesRequestStatusEnum> | Array<string>): ListNatGatewayDnatRulesRequest {
        this['status'] = status;
        return this;
    }
    public withFloatingIpId(floatingIpId: string): ListNatGatewayDnatRulesRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withGlobalEipId(globalEipId: string): ListNatGatewayDnatRulesRequest {
        this['global_eip_id'] = globalEipId;
        return this;
    }
    public set globalEipId(globalEipId: string  | undefined) {
        this['global_eip_id'] = globalEipId;
    }
    public get globalEipId(): string | undefined {
        return this['global_eip_id'];
    }
    public withInternalServicePort(internalServicePort: number): ListNatGatewayDnatRulesRequest {
        this['internal_service_port'] = internalServicePort;
        return this;
    }
    public set internalServicePort(internalServicePort: number  | undefined) {
        this['internal_service_port'] = internalServicePort;
    }
    public get internalServicePort(): number | undefined {
        return this['internal_service_port'];
    }
    public withLimit(limit: number): ListNatGatewayDnatRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListNatGatewayDnatRulesRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ListNatGatewayDnatRulesRequest {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): ListNatGatewayDnatRulesRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withNatGatewayId(natGatewayId: Array<string>): ListNatGatewayDnatRulesRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: Array<string>  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): Array<string> | undefined {
        return this['nat_gateway_id'];
    }
    public withPortId(portId: string): ListNatGatewayDnatRulesRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPrivateIp(privateIp: string): ListNatGatewayDnatRulesRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withProtocol(protocol: Array<string>): ListNatGatewayDnatRulesRequest {
        this['protocol'] = protocol;
        return this;
    }
    public withMarker(marker: string): ListNatGatewayDnatRulesRequest {
        this['marker'] = marker;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewayDnatRulesRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    EIP_FREEZED = 'EIP_FREEZED',
    INACTIVE = 'INACTIVE'
}
