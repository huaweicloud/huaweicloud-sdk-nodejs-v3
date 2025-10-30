import { CreateVpcCondition } from './CreateVpcCondition';


export class CreateVpcEndpointRequest {
    public body?: CreateVpcCondition;
    public constructor() { 
    }
    public withBody(body: CreateVpcCondition): CreateVpcEndpointRequest {
        this['body'] = body;
        return this;
    }
}