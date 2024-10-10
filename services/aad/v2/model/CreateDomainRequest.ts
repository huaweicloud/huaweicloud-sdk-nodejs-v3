import { CreateAadDomainRequestBody } from './CreateAadDomainRequestBody';


export class CreateDomainRequest {
    public body?: CreateAadDomainRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAadDomainRequestBody): CreateDomainRequest {
        this['body'] = body;
        return this;
    }
}