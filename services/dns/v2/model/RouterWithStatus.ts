

export class RouterWithStatus {
    public status?: string;
    private 'router_id'?: string;
    private 'router_region'?: string;
    public constructor() { 
    }
    public withStatus(status: string): RouterWithStatus {
        this['status'] = status;
        return this;
    }
    public withRouterId(routerId: string): RouterWithStatus {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withRouterRegion(routerRegion: string): RouterWithStatus {
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