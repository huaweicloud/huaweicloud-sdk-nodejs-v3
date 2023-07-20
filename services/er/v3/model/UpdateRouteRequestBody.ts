import { UpdateRoute } from './UpdateRoute';


export class UpdateRouteRequestBody {
    public route?: UpdateRoute;
    public constructor(route?: UpdateRoute) { 
        this['route'] = route;
    }
    public withRoute(route: UpdateRoute): UpdateRouteRequestBody {
        this['route'] = route;
        return this;
    }
}