import { CreateCustomLineRequestBody } from './CreateCustomLineRequestBody';


export class CreateCustomLineRequest {
    public body?: CreateCustomLineRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCustomLineRequestBody): CreateCustomLineRequest {
        this['body'] = body;
        return this;
    }
}