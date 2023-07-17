

export class NeutronDeleteRouterRequest {
    private 'router_id': string | undefined;
    public constructor(routerId?: any) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronDeleteRouterRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
}