import { CreateApplicationRequestBody } from './CreateApplicationRequestBody';


export class CreateApplicationRequest {
    public body?: CreateApplicationRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateApplicationRequestBody): CreateApplicationRequest {
        this['body'] = body;
        return this;
    }
}