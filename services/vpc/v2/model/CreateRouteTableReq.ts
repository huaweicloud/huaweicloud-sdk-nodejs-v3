import { RouteTableRoute } from './RouteTableRoute';


export class CreateRouteTableReq {
    public name?: string;
    public routes?: Array<RouteTableRoute>;
    private 'vpc_id': string | undefined;
    public description?: string;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withName(name: string): CreateRouteTableReq {
        this['name'] = name;
        return this;
    }
    public withRoutes(routes: Array<RouteTableRoute>): CreateRouteTableReq {
        this['routes'] = routes;
        return this;
    }
    public withVpcId(vpcId: string): CreateRouteTableReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDescription(description: string): CreateRouteTableReq {
        this['description'] = description;
        return this;
    }
}