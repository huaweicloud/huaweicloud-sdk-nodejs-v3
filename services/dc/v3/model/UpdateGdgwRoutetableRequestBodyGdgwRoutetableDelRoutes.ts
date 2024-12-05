

export class UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes {
    public destination?: string;
    public nexthop?: string;
    public type?: UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutesTypeEnum | string;
    public constructor(destination?: string, nexthop?: string, type?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['type'] = type;
    }
    public withDestination(destination: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutesTypeEnum | string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutesTypeEnum {
    VIF_PEER = 'vif_peer',
    PEER_LINK = 'peer_link',
    GDGW = 'gdgw'
}
