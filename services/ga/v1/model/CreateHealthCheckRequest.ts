import { CreateHealthCheckRequestBody } from './CreateHealthCheckRequestBody';


export class CreateHealthCheckRequest {
    public body?: CreateHealthCheckRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateHealthCheckRequestBody): CreateHealthCheckRequest {
        this['body'] = body;
        return this;
    }
}