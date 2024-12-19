import { AddGdgwRouteAction } from './AddGdgwRouteAction';
import { DeleteGdgwRouteAction } from './DeleteGdgwRouteAction';
import { UpdateRouteAction } from './UpdateRouteAction';


export class GdgwRouteTableRequest {
    private 'add_routes'?: Array<AddGdgwRouteAction>;
    private 'del_routes'?: Array<DeleteGdgwRouteAction>;
    private 'update_routes'?: Array<UpdateRouteAction>;
    public constructor() { 
    }
    public withAddRoutes(addRoutes: Array<AddGdgwRouteAction>): GdgwRouteTableRequest {
        this['add_routes'] = addRoutes;
        return this;
    }
    public set addRoutes(addRoutes: Array<AddGdgwRouteAction>  | undefined) {
        this['add_routes'] = addRoutes;
    }
    public get addRoutes(): Array<AddGdgwRouteAction> | undefined {
        return this['add_routes'];
    }
    public withDelRoutes(delRoutes: Array<DeleteGdgwRouteAction>): GdgwRouteTableRequest {
        this['del_routes'] = delRoutes;
        return this;
    }
    public set delRoutes(delRoutes: Array<DeleteGdgwRouteAction>  | undefined) {
        this['del_routes'] = delRoutes;
    }
    public get delRoutes(): Array<DeleteGdgwRouteAction> | undefined {
        return this['del_routes'];
    }
    public withUpdateRoutes(updateRoutes: Array<UpdateRouteAction>): GdgwRouteTableRequest {
        this['update_routes'] = updateRoutes;
        return this;
    }
    public set updateRoutes(updateRoutes: Array<UpdateRouteAction>  | undefined) {
        this['update_routes'] = updateRoutes;
    }
    public get updateRoutes(): Array<UpdateRouteAction> | undefined {
        return this['update_routes'];
    }
}