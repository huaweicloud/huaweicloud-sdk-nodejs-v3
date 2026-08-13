import { GenericResourceGroupRequestBody } from './GenericResourceGroupRequestBody';


export class CreateResourceGroupRequest {
    public body?: GenericResourceGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: GenericResourceGroupRequestBody): CreateResourceGroupRequest {
        this['body'] = body;
        return this;
    }
}