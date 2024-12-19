import { AddressFamily } from './AddressFamily';


export class CommonRoutetable {
    public id?: string;
    private 'tenant_id'?: string;
    private 'gateway_id'?: string;
    public destination?: string;
    public nexthop?: string;
    private 'obtain_mode'?: CommonRoutetableObtainModeEnum | string;
    public status?: CommonRoutetableStatusEnum | string;
    private 'address_family'?: AddressFamily;
    public description?: string;
    public constructor(id?: string, tenantId?: string, destination?: string, nexthop?: string, obtainMode?: string, status?: string, addressFamily?: AddressFamily) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['obtain_mode'] = obtainMode;
        this['status'] = status;
        this['address_family'] = addressFamily;
    }
    public withId(id: string): CommonRoutetable {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): CommonRoutetable {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGatewayId(gatewayId: string): CommonRoutetable {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withDestination(destination: string): CommonRoutetable {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): CommonRoutetable {
        this['nexthop'] = nexthop;
        return this;
    }
    public withObtainMode(obtainMode: CommonRoutetableObtainModeEnum | string): CommonRoutetable {
        this['obtain_mode'] = obtainMode;
        return this;
    }
    public set obtainMode(obtainMode: CommonRoutetableObtainModeEnum | string  | undefined) {
        this['obtain_mode'] = obtainMode;
    }
    public get obtainMode(): CommonRoutetableObtainModeEnum | string | undefined {
        return this['obtain_mode'];
    }
    public withStatus(status: CommonRoutetableStatusEnum | string): CommonRoutetable {
        this['status'] = status;
        return this;
    }
    public withAddressFamily(addressFamily: AddressFamily): CommonRoutetable {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: AddressFamily  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): AddressFamily | undefined {
        return this['address_family'];
    }
    public withDescription(description: string): CommonRoutetable {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommonRoutetableObtainModeEnum {
    CUSTOMIZED = 'customized',
    SPECIFIC = 'specific',
    BGP = 'bgp'
}
/**
    * @export
    * @enum {string}
    */
export enum CommonRoutetableStatusEnum {
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    PENDING_CREATE = 'PENDING_CREATE'
}
