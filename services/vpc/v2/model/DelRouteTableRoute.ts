

export class DelRouteTableRoute {
    public type?: string;
    public destination: string;
    public nexthop?: string;
    public description?: string;
    public constructor(destination?: any) { 
        this['destination'] = destination;
    }
    public withType(type: string): DelRouteTableRoute {
        this['type'] = type;
        return this;
    }
    public withDestination(destination: string): DelRouteTableRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): DelRouteTableRoute {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): DelRouteTableRoute {
        this['description'] = description;
        return this;
    }
}