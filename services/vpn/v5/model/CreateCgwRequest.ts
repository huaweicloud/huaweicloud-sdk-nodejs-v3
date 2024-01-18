import { CreateCgwRequestBody } from './CreateCgwRequestBody';


export class CreateCgwRequest {
    public body?: CreateCgwRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateCgwRequestBody): CreateCgwRequest {
        this['body'] = body;
        return this;
    }
}