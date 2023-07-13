

export class HostRoute {
    public destination?: string;
    public nexthop?: string;
    public constructor() { 
    }
    public withDestination(destination: string): HostRoute {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): HostRoute {
        this['nexthop'] = nexthop;
        return this;
    }
}