import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes } from './UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes } from './UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes';
import { UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes } from './UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes';


export class UpdateGdgwRoutetableRequestBodyGdgwRoutetable {
    private 'add_routes'?: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes>;
    private 'del_routes'?: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes>;
    private 'update_routes'?: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes>;
    public constructor() { 
    }
    public withAddRoutes(addRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes>): UpdateGdgwRoutetableRequestBodyGdgwRoutetable {
        this['add_routes'] = addRoutes;
        return this;
    }
    public set addRoutes(addRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes>  | undefined) {
        this['add_routes'] = addRoutes;
    }
    public get addRoutes(): Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableAddRoutes> | undefined {
        return this['add_routes'];
    }
    public withDelRoutes(delRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes>): UpdateGdgwRoutetableRequestBodyGdgwRoutetable {
        this['del_routes'] = delRoutes;
        return this;
    }
    public set delRoutes(delRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes>  | undefined) {
        this['del_routes'] = delRoutes;
    }
    public get delRoutes(): Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableDelRoutes> | undefined {
        return this['del_routes'];
    }
    public withUpdateRoutes(updateRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes>): UpdateGdgwRoutetableRequestBodyGdgwRoutetable {
        this['update_routes'] = updateRoutes;
        return this;
    }
    public set updateRoutes(updateRoutes: Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes>  | undefined) {
        this['update_routes'] = updateRoutes;
    }
    public get updateRoutes(): Array<UpdateGdgwRoutetableRequestBodyGdgwRoutetableUpdateRoutes> | undefined {
        return this['update_routes'];
    }
}