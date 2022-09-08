import { CreateRouteRequestBody } from './CreateRouteRequestBody';


export class CreateStaticRouteRequest {
    private 'X-Client-Token'?: string | undefined;
    private 'route_table_id': string | undefined;
    public body?: CreateRouteRequestBody;
    public constructor(routeTableId?: any) { 
        this['route_table_id'] = routeTableId;
    }
    public withXClientToken(xClientToken: string): CreateStaticRouteRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
    public withRouteTableId(routeTableId: string): CreateStaticRouteRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withBody(body: CreateRouteRequestBody): CreateStaticRouteRequest {
        this['body'] = body;
        return this;
    }
}