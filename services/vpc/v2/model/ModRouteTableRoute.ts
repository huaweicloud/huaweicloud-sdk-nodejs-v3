

export class ModRouteTableRoute {
    public type: string;
    public destination: string;
    public nexthop: string;
    public description?: string;
    public constructor(type?: any, destination?: any, nexthop?: any) { 
        this['type'] = type;
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withType(type: string): ModRouteTableRoute {
        this['type'] = type;
        return this;
    }
    public withDestination(destination: string): ModRouteTableRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): ModRouteTableRoute {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): ModRouteTableRoute {
        this['description'] = description;
        return this;
    }
}