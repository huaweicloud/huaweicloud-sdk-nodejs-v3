

export class BaseDeleteRouteAction {
    public destination?: string;
    public nexthop?: string;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): BaseDeleteRouteAction {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): BaseDeleteRouteAction {
        this['nexthop'] = nexthop;
        return this;
    }
}