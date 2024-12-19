

export class ListGdgwRouteTablesRequest {
    private 'gdgw_id'?: string;
    private 'address_family'?: Array<ListGdgwRouteTablesRequestAddressFamilyEnum> | Array<string>;
    public nexthop?: Array<string>;
    public destination?: Array<string>;
    public constructor(gdgwId?: string) { 
        this['gdgw_id'] = gdgwId;
    }
    public withGdgwId(gdgwId: string): ListGdgwRouteTablesRequest {
        this['gdgw_id'] = gdgwId;
        return this;
    }
    public set gdgwId(gdgwId: string  | undefined) {
        this['gdgw_id'] = gdgwId;
    }
    public get gdgwId(): string | undefined {
        return this['gdgw_id'];
    }
    public withAddressFamily(addressFamily: Array<ListGdgwRouteTablesRequestAddressFamilyEnum> | Array<string>): ListGdgwRouteTablesRequest {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: Array<ListGdgwRouteTablesRequestAddressFamilyEnum> | Array<string>  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): Array<ListGdgwRouteTablesRequestAddressFamilyEnum> | Array<string> | undefined {
        return this['address_family'];
    }
    public withNexthop(nexthop: Array<string>): ListGdgwRouteTablesRequest {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDestination(destination: Array<string>): ListGdgwRouteTablesRequest {
        this['destination'] = destination;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGdgwRouteTablesRequestAddressFamilyEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
