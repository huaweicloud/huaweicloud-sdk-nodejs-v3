import { CreateRouteTable } from './CreateRouteTable';


export class CreateRouteTableRequestBody {
    private 'route_table'?: CreateRouteTable;
    public constructor() { 
    }
    public withRouteTable(routeTable: CreateRouteTable): CreateRouteTableRequestBody {
        this['route_table'] = routeTable;
        return this;
    }
    public set routeTable(routeTable: CreateRouteTable  | undefined) {
        this['route_table'] = routeTable;
    }
    public get routeTable(): CreateRouteTable | undefined {
        return this['route_table'];
    }
}