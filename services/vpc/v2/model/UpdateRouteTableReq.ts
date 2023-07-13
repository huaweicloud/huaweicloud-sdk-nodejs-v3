import { RouteTableRouteAction } from './RouteTableRouteAction';


export class UpdateRouteTableReq {
    public name?: string;
    public description?: string;
    public routes?: RouteTableRouteAction;
    public constructor() { 
    }
    public withName(name: string): UpdateRouteTableReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateRouteTableReq {
        this['description'] = description;
        return this;
    }
    public withRoutes(routes: RouteTableRouteAction): UpdateRouteTableReq {
        this['routes'] = routes;
        return this;
    }
}