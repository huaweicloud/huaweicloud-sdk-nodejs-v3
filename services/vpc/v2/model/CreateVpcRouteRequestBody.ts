import { CreateVpcRouteOption } from './CreateVpcRouteOption';


export class CreateVpcRouteRequestBody {
    public route?: CreateVpcRouteOption;
    public constructor(route?: CreateVpcRouteOption) { 
        this['route'] = route;
    }
    public withRoute(route: CreateVpcRouteOption): CreateVpcRouteRequestBody {
        this['route'] = route;
        return this;
    }
}