import { CreateAgencyRequestBody } from './CreateAgencyRequestBody';


export class CreateAgencyRequest {
    public body?: CreateAgencyRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAgencyRequestBody): CreateAgencyRequest {
        this['body'] = body;
        return this;
    }
}