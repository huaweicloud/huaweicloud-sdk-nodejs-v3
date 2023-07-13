import { CreateDomainRequestBody } from './CreateDomainRequestBody';


export class CreateDomainRequest {
    public body?: CreateDomainRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDomainRequestBody): CreateDomainRequest {
        this['body'] = body;
        return this;
    }
}