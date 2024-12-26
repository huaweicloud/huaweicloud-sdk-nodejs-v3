

export class ListGdgwRouteTablesRequest {
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    private 'gdgw_id'?: string;
    public nexthop?: Array<string>;
    public destination?: Array<string>;
    private 'address_family'?: Array<ListGdgwRouteTablesRequestAddressFamilyEnum> | Array<string>;
    public constructor(gdgwId?: string) { 
        this['gdgw_id'] = gdgwId;
    }
    public withFields(fields: Array<string>): ListGdgwRouteTablesRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ListGdgwRouteTablesRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
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
    public withNexthop(nexthop: Array<string>): ListGdgwRouteTablesRequest {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDestination(destination: Array<string>): ListGdgwRouteTablesRequest {
        this['destination'] = destination;
        return this;
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
}

/**
    * @export
    * @enum {string}
    */
export enum ListGdgwRouteTablesRequestAddressFamilyEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
