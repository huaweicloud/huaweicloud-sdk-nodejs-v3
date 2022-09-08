import { UpdateRouteTable } from './UpdateRouteTable';


export class UpdateRouteTableRequestBody {
    private 'route_table'?: UpdateRouteTable | undefined;
    public constructor() { 
    }
    public withRouteTable(routeTable: UpdateRouteTable): UpdateRouteTableRequestBody {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: UpdateRouteTable | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable() {
        return this['route_table'];
    }
}