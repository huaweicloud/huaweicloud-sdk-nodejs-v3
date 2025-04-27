import { CreateEndpointRequestBody } from './CreateEndpointRequestBody';


export class CreateEndpointRequest {
    public body?: CreateEndpointRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateEndpointRequestBody): CreateEndpointRequest {
        this['body'] = body;
        return this;
    }
}