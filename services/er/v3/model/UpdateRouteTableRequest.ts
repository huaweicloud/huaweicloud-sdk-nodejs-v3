import { UpdateRouteTableRequestBody } from './UpdateRouteTableRequestBody';


export class UpdateRouteTableRequest {
    private 'er_id'?: string;
    private 'route_table_id'?: string;
    public body?: UpdateRouteTableRequestBody;
    public constructor(erId?: string, routeTableId?: string) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
    }
    public withErId(erId: string): UpdateRouteTableRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): UpdateRouteTableRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withBody(body: UpdateRouteTableRequestBody): UpdateRouteTableRequest {
        this['body'] = body;
        return this;
    }
}