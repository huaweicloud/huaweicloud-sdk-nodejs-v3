import { RouterInterfaceRequestBody } from './RouterInterfaceRequestBody';


export class NeutronAddRouterInterfaceRequest {
    private 'router_id'?: string;
    public body?: RouterInterfaceRequestBody;
    public constructor(routerId?: string) { 
        this['router_id'] = routerId;
    }
    public withRouterId(routerId: string): NeutronAddRouterInterfaceRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withBody(body: RouterInterfaceRequestBody): NeutronAddRouterInterfaceRequest {
        this['body'] = body;
        return this;
    }
}