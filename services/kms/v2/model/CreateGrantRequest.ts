import { CreateGrantRequestBody } from './CreateGrantRequestBody';


export class CreateGrantRequest {
    public body?: CreateGrantRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGrantRequestBody): CreateGrantRequest {
        this['body'] = body;
        return this;
    }
}