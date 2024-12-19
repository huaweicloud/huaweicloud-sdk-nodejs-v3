import { BaseDeleteRouteAction } from './BaseDeleteRouteAction';
import { RouteTypeOfGdgw } from './RouteTypeOfGdgw';


export class DeleteGdgwRouteAction {
    public destination?: string;
    public nexthop?: string;
    public type?: RouteTypeOfGdgw;
    public constructor(destination?: string, nexthop?: string) { 
        this['destination'] = destination;
        this['nexthop'] = nexthop;
    }
    public withDestination(destination: string): DeleteGdgwRouteAction {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): DeleteGdgwRouteAction {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: RouteTypeOfGdgw): DeleteGdgwRouteAction {
        this['type'] = type;
        return this;
    }
}