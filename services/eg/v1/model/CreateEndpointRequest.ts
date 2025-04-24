import { EndpointCreateReq } from './EndpointCreateReq';


export class CreateEndpointRequest {
    public body?: EndpointCreateReq;
    public constructor() { 
    }
    public withBody(body: EndpointCreateReq): CreateEndpointRequest {
        this['body'] = body;
        return this;
    }
}