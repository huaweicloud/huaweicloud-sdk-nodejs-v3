import { CreateVpcRouteOption } from './CreateVpcRouteOption';


export class CreateVpcRouteRequestBody {
    public route: CreateVpcRouteOption;
    public constructor(route?: any) { 
        this['route'] = route;
    }
    public withRoute(route: CreateVpcRouteOption): CreateVpcRouteRequestBody {
        this['route'] = route;
        return this;
    }
}