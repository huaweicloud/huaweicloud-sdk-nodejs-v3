import { UpdateRouteRequestBody } from './UpdateRouteRequestBody';


export class UpdateStaticRouteRequest {
    private 'route_table_id': string | undefined;
    private 'route_id': string | undefined;
    public body?: UpdateRouteRequestBody;
    public constructor(routeTableId?: any, routeId?: any) { 
        this['route_table_id'] = routeTableId;
        this['route_id'] = routeId;
    }
    public withRouteTableId(routeTableId: string): UpdateStaticRouteRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withRouteId(routeId: string): UpdateStaticRouteRequest {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId() {
        return this['route_id'];
    }
    public withBody(body: UpdateRouteRequestBody): UpdateStaticRouteRequest {
        this['body'] = body;
        return this;
    }
}