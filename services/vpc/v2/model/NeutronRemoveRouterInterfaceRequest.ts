import { RouterInterfaceRequestBody } from './RouterInterfaceRequestBody';


export class NeutronRemoveRouterInterfaceRequest {
    private 'router_id': string | undefined;
    public body?: RouterInterfaceRequestBody;
    public constructor(routerId?: any) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronRemoveRouterInterfaceRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withBody(body: RouterInterfaceRequestBody): NeutronRemoveRouterInterfaceRequest {
        this['body'] = body;
        return this;
    }
}