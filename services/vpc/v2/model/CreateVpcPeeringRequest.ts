import { CreateVpcPeeringRequestBody } from './CreateVpcPeeringRequestBody';


export class CreateVpcPeeringRequest {
    public body?: CreateVpcPeeringRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVpcPeeringRequestBody): CreateVpcPeeringRequest {
        this['body'] = body;
        return this;
    }
}