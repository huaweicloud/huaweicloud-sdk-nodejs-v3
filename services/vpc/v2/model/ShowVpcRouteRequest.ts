

export class ShowVpcRouteRequest {
    private 'route_id'?: string;
    public constructor(routeId?: string) { 
        this['route_id'] = routeId;
    }
    public withRouteId(routeId: string): ShowVpcRouteRequest {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string  | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId(): string | undefined {
        return this['route_id'];
    }
}