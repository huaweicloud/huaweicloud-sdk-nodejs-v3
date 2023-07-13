import { CreateSubnetRequestBody } from './CreateSubnetRequestBody';


export class CreateSubnetRequest {
    public body?: CreateSubnetRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSubnetRequestBody): CreateSubnetRequest {
        this['body'] = body;
        return this;
    }
}