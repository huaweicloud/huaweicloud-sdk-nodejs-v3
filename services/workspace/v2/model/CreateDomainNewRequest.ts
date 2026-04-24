import { CreateDomainNewReq } from './CreateDomainNewReq';


export class CreateDomainNewRequest {
    public body?: CreateDomainNewReq;
    public constructor() { 
    }
    public withBody(body: CreateDomainNewReq): CreateDomainNewRequest {
        this['body'] = body;
        return this;
    }
}