import { CreateVpcRequestBody } from './CreateVpcRequestBody';


export class CreateVpcRequest {
    public body?: CreateVpcRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVpcRequestBody): CreateVpcRequest {
        this['body'] = body;
        return this;
    }
}