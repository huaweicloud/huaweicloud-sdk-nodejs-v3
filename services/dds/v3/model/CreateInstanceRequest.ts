import { CreateInstanceRequestBody } from './CreateInstanceRequestBody';


export class CreateInstanceRequest {
    public body?: CreateInstanceRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateInstanceRequestBody): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}