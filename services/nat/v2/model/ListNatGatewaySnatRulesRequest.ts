

export class ListNatGatewaySnatRulesRequest {
    private 'admin_state_up'?: boolean;
    public cidr?: string;
    public limit?: number;
    private 'floating_ip_address'?: string;
    private 'floating_ip_id'?: string;
    public id?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'nat_gateway_id'?: Array<string>;
    private 'network_id'?: string;
    private 'source_type'?: number;
    public status?: ListNatGatewaySnatRulesRequestStatusEnum | string;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): ListNatGatewaySnatRulesRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withCidr(cidr: string): ListNatGatewaySnatRulesRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withLimit(limit: number): ListNatGatewaySnatRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFloatingIpAddress(floatingIpAddress: string): ListNatGatewaySnatRulesRequest {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withFloatingIpId(floatingIpId: string): ListNatGatewaySnatRulesRequest {
        this['floating_ip_id'] = floatingIpId;
        return this;
    }
    public set floatingIpId(floatingIpId: string  | undefined) {
        this['floating_ip_id'] = floatingIpId;
    }
    public get floatingIpId(): string | undefined {
        return this['floating_ip_id'];
    }
    public withId(id: string): ListNatGatewaySnatRulesRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ListNatGatewaySnatRulesRequest {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): ListNatGatewaySnatRulesRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withNatGatewayId(natGatewayId: Array<string>): ListNatGatewaySnatRulesRequest {
        this['nat_gateway_id'] = natGatewayId;
        return this;
    }
    public set natGatewayId(natGatewayId: Array<string>  | undefined) {
        this['nat_gateway_id'] = natGatewayId;
    }
    public get natGatewayId(): Array<string> | undefined {
        return this['nat_gateway_id'];
    }
    public withNetworkId(networkId: string): ListNatGatewaySnatRulesRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withSourceType(sourceType: number): ListNatGatewaySnatRulesRequest {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withStatus(status: ListNatGatewaySnatRulesRequestStatusEnum | string): ListNatGatewaySnatRulesRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaySnatRulesRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    EIP_FREEZED = 'EIP_FREEZED',
    INACTIVE = 'INACTIVE'
}
