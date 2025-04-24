import { EndpointUpdateReq } from './EndpointUpdateReq';


export class UpdateEndpointRequest {
    private 'endpoint_id'?: string;
    public body?: EndpointUpdateReq;
    public constructor(endpointId?: string) { 
        this['endpoint_id'] = endpointId;
    }
    public withEndpointId(endpointId: string): UpdateEndpointRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withBody(body: EndpointUpdateReq): UpdateEndpointRequest {
        this['body'] = body;
        return this;
    }
}