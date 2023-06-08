import { CreateVpcEndpointRequestBody } from './CreateVpcEndpointRequestBody';


export class CreateVpcEndpointRequest {
    public body?: CreateVpcEndpointRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVpcEndpointRequestBody): CreateVpcEndpointRequest {
        this['body'] = body;
        return this;
    }
}