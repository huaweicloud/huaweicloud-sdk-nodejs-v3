import { CreateAccessPointRequestBody } from './CreateAccessPointRequestBody';


export class CreateAccessPointRequest {
    public body?: CreateAccessPointRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAccessPointRequestBody): CreateAccessPointRequest {
        this['body'] = body;
        return this;
    }
}