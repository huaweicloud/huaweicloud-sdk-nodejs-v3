import { AddressFamily } from './AddressFamily';
import { CommonRoutetable } from './CommonRoutetable';
import { RouteTypeOfGdgw } from './RouteTypeOfGdgw';


export class ShowGdgwRoutetable {
    public id?: string;
    private 'tenant_id'?: string;
    private 'gateway_id'?: string;
    public destination?: string;
    public nexthop?: string;
    private 'obtain_mode'?: ShowGdgwRoutetableObtainModeEnum | string;
    public status?: ShowGdgwRoutetableStatusEnum | string;
    private 'address_family'?: AddressFamily;
    public description?: string;
    public type?: RouteTypeOfGdgw;
    public constructor(id?: string, tenantId?: string, destination?: string, nexthop?: string, obtainMode?: string, status?: string, addressFamily?: AddressFamily, type?: RouteTypeOfGdgw) { 
        this['id'] = id;
        this['tenant_id'] = tenantId;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['obtain_mode'] = obtainMode;
        this['status'] = status;
        this['address_family'] = addressFamily;
        this['type'] = type;
    }
    public withId(id: string): ShowGdgwRoutetable {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ShowGdgwRoutetable {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGatewayId(gatewayId: string): ShowGdgwRoutetable {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withDestination(destination: string): ShowGdgwRoutetable {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): ShowGdgwRoutetable {
        this['nexthop'] = nexthop;
        return this;
    }
    public withObtainMode(obtainMode: ShowGdgwRoutetableObtainModeEnum | string): ShowGdgwRoutetable {
        this['obtain_mode'] = obtainMode;
        return this;
    }
    public set obtainMode(obtainMode: ShowGdgwRoutetableObtainModeEnum | string  | undefined) {
        this['obtain_mode'] = obtainMode;
    }
    public get obtainMode(): ShowGdgwRoutetableObtainModeEnum | string | undefined {
        return this['obtain_mode'];
    }
    public withStatus(status: ShowGdgwRoutetableStatusEnum | string): ShowGdgwRoutetable {
        this['status'] = status;
        return this;
    }
    public withAddressFamily(addressFamily: AddressFamily): ShowGdgwRoutetable {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: AddressFamily  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): AddressFamily | undefined {
        return this['address_family'];
    }
    public withDescription(description: string): ShowGdgwRoutetable {
        this['description'] = description;
        return this;
    }
    public withType(type: RouteTypeOfGdgw): ShowGdgwRoutetable {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowGdgwRoutetableObtainModeEnum {
    CUSTOMIZED = 'customized',
    SPECIFIC = 'specific',
    BGP = 'bgp'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowGdgwRoutetableStatusEnum {
    ACTIVE = 'ACTIVE',
    ERROR = 'ERROR',
    PENDING_CREATE = 'PENDING_CREATE'
}
