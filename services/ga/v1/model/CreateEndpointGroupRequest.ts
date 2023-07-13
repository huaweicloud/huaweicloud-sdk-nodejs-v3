import { CreateEndpointGroupRequestBody } from './CreateEndpointGroupRequestBody';


export class CreateEndpointGroupRequest {
    public body?: CreateEndpointGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateEndpointGroupRequestBody): CreateEndpointGroupRequest {
        this['body'] = body;
        return this;
    }
}