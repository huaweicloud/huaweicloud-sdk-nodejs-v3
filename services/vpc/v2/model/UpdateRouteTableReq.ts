import { RouteTableRoute } from './RouteTableRoute';


export class UpdateRouteTableReq {
    public name?: string;
    public description?: string;
    public routes?: { [key: string]: Array<RouteTableRoute>; };
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
    public withRoutes(routes: { [key: string]: Array<RouteTableRoute>; }): UpdateRouteTableReq {
        this['routes'] = routes;
        return this;
    }
}