import { CreateL7PolicyRequestBody } from './CreateL7PolicyRequestBody';


export class CreateL7PolicyRequest {
    public body?: CreateL7PolicyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateL7PolicyRequestBody): CreateL7PolicyRequest {
        this['body'] = body;
        return this;
    }
}