import { CreateVgwRequestBody } from './CreateVgwRequestBody';


export class CreateVgwRequest {
    public body?: CreateVgwRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateVgwRequestBody): CreateVgwRequest {
        this['body'] = body;
        return this;
    }
}