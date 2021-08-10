import { Route } from './Route';


export class UpdateRouteTableReq {
    public name?: string;
    public description?: string;
    public routes?: { [key: string]: Array<Route>; };
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
    public withRoutes(routes: { [key: string]: Array<Route>; }): UpdateRouteTableReq {
        this['routes'] = routes;
        return this;
    }
}