import { CreateResourceGroupRequestBody } from './CreateResourceGroupRequestBody';


export class CreateResourceGroupRequest {
    public body?: CreateResourceGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateResourceGroupRequestBody): CreateResourceGroupRequest {
        this['body'] = body;
        return this;
    }
}