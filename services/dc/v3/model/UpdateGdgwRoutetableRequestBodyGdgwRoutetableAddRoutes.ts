

export class UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes {
    public destination?: string;
    public nexthop?: string;
    public type?: UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutesTypeEnum | string;
    public description?: string;
    public constructor(destination?: string, nexthop?: string, type?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
        this['type'] = type;
    }
    public withDestination(destination: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutesTypeEnum | string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutesTypeEnum {
    VIF_PEER = 'vif_peer',
    PEER_LINK = 'peer_link',
    GDGW = 'gdgw'
}
