

export class Router {
    private 'router_id': string | undefined;
    private 'router_region'?: string | undefined;
    public constructor(routerId?: any) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): Router {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withRouterRegion(routerRegion: string): Router {
        this['router_region'] = routerRegion;
        return this;
    }
    public set routerRegion(routerRegion: string | undefined) {
        this['router_region'] = routerRegion;
    }
    public get routerRegion() {
        return this['router_region'];
    }
}