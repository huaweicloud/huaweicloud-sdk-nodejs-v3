

export class Router {
    private 'router_id'?: string;
    private 'router_region'?: string;
    public constructor(routerId?: string) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): Router {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withRouterRegion(routerRegion: string): Router {
        this['router_region'] = routerRegion;
        return this;
    }
    public set routerRegion(routerRegion: string  | undefined) {
        this['router_region'] = routerRegion;
    }
    public get routerRegion(): string | undefined {
        return this['router_region'];
    }
}