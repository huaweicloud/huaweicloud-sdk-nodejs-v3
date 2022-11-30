

export class ShowVpcRouteRequest {
    private 'route_id': string | undefined;
    public constructor(routeId?: any) { 
        this['route_id'] = routeId;
    }
    public withRouteId(routeId: string): ShowVpcRouteRequest {
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