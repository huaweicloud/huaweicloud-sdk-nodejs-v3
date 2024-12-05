

export class UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes {
    public destination?: string;
    public nexthop?: string;
    public description?: string;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes {
        this['description'] = description;
        return this;
    }
}