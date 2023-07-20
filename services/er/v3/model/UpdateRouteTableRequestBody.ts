import { UpdateRouteTable } from './UpdateRouteTable';


export class UpdateRouteTableRequestBody {
    private 'route_table'?: UpdateRouteTable;
    public constructor() { 
    }
    public withRouteTable(routeTable: UpdateRouteTable): UpdateRouteTableRequestBody {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: UpdateRouteTable  | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable(): UpdateRouteTable | undefined {
        return this['route_table'];
    }
}