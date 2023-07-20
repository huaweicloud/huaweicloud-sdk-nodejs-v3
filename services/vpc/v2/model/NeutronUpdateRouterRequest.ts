import { NeutronUpdateRouterRequestBody } from './NeutronUpdateRouterRequestBody';


export class NeutronUpdateRouterRequest {
    private 'router_id'?: string;
    public body?: NeutronUpdateRouterRequestBody;
    public constructor(routerId?: string) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronUpdateRouterRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withBody(body: NeutronUpdateRouterRequestBody): NeutronUpdateRouterRequest {
        this['body'] = body;
        return this;
    }
}