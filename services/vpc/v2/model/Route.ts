

export class Route {
    public destination?: string;
    public nexthop?: string;
    public constructor() { 
    }
    public withDestination(destination: string): Route {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): Route {
        this['nexthop'] = nexthop;
        return this;
    }
}