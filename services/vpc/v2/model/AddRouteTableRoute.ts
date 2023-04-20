

export class AddRouteTableRoute {
    public type: string;
    public destination: string;
    public nexthop: string;
    public description?: string;
    public constructor(type?: any, destination?: any, nexthop?: any) { 
        this['type'] = type;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withType(type: string): AddRouteTableRoute {
        this['type'] = type;
        return this;
    }
    public withDestination(destination: string): AddRouteTableRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): AddRouteTableRoute {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): AddRouteTableRoute {
        this['description'] = description;
        return this;
    }
}