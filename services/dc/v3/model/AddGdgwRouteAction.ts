import { BaseAddRouteAction } from './BaseAddRouteAction';
import { RouteTypeOfGdgw } from './RouteTypeOfGdgw';


export class AddGdgwRouteAction {
    public destination?: string;
    public nexthop?: string;
    public description?: string;
    public type?: RouteTypeOfGdgw;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): AddGdgwRouteAction {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): AddGdgwRouteAction {
        this['nexthop'] = nexthop;
        return this;
    }
    public withDescription(description: string): AddGdgwRouteAction {
        this['description'] = description;
        return this;
    }
    public withType(type: RouteTypeOfGdgw): AddGdgwRouteAction {
        this['type'] = type;
        return this;
    }
}