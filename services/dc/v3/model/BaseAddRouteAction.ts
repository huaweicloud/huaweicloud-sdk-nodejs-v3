

export class BaseAddRouteAction {
    public destination?: string;
    public nexthop?: string;
    public description?: string;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): BaseAddRouteAction {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): BaseAddRouteAction {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): BaseAddRouteAction {
        this['description'] = description;
        return this;
    }
}