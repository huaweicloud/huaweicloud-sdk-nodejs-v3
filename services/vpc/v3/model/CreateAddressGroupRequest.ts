import { CreateAddressGroupRequestBody } from './CreateAddressGroupRequestBody';


export class CreateAddressGroupRequest {
    public body?: CreateAddressGroupRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAddressGroupRequestBody): CreateAddressGroupRequest {
        this['body'] = body;
        return this;
    }
}