

export class RouteTableRoute {
    public type: string;
    public destination: string;
    public nexthop: string;
    public description?: string;
    public constructor(type?: any, destination?: any, nexthop?: any) { 
        this['type'] = type;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withType(type: string): RouteTableRoute {
        this['type'] = type;
        return this;
    }
    public withDestination(destination: string): RouteTableRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): RouteTableRoute {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): RouteTableRoute {
        this['description'] = description;
        return this;
    }
}