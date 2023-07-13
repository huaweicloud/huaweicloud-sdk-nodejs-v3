

export class DeleteVpcRouteRequest {
    private 'route_id': string | undefined;
    public constructor(routeId?: any) { 
        this['route_id'] = routeId;
    }
    public withRouteId(routeId: string): DeleteVpcRouteRequest {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId() {
        return this['route_id'];
    }
}