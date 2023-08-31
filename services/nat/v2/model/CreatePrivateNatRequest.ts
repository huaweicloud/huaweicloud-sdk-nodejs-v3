import { CreatePrivateNatRequestBody } from './CreatePrivateNatRequestBody';


export class CreatePrivateNatRequest {
    public body?: CreatePrivateNatRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePrivateNatRequestBody): CreatePrivateNatRequest {
        this['body'] = body;
        return this;
    }
}