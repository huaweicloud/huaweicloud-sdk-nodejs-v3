import { CreateRoute } from './CreateRoute';


export class CreateRouteRequestBody {
    public route: CreateRoute;
    public constructor(route?: any) { 
        this['route'] = route;
    }
    public withRoute(route: CreateRoute): CreateRouteRequestBody {
        this['route'] = route;
        return this;
    }
}