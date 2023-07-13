import { NeutronUpdateRouterRequestBody } from './NeutronUpdateRouterRequestBody';


export class NeutronUpdateRouterRequest {
    private 'router_id': string | undefined;
    public body?: NeutronUpdateRouterRequestBody;
    public constructor(routerId?: any) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronUpdateRouterRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withBody(body: NeutronUpdateRouterRequestBody): NeutronUpdateRouterRequest {
        this['body'] = body;
        return this;
    }
}