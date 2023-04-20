import { AddRouteTableRoute } from './AddRouteTableRoute';
import { DelRouteTableRoute } from './DelRouteTableRoute';
import { ModRouteTableRoute } from './ModRouteTableRoute';


export class RouteTableRouteAction {
    public add?: Array<AddRouteTableRoute>;
    public mod?: Array<ModRouteTableRoute>;
    public del?: Array<DelRouteTableRoute>;
    public constructor() { 
    }
    public withAdd(add: Array<AddRouteTableRoute>): RouteTableRouteAction {
        this['add'] = add;
        return this;
    }
    public withMod(mod: Array<ModRouteTableRoute>): RouteTableRouteAction {
        this['mod'] = mod;
        return this;
    }
    public withDel(del: Array<DelRouteTableRoute>): RouteTableRouteAction {
        this['del'] = del;
        return this;
    }
}