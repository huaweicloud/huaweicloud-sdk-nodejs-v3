import { LiveDomainCreateReq } from './LiveDomainCreateReq';


export class CreateDomainRequest {
    public body?: LiveDomainCreateReq;
    public constructor() { 
    }
    public withBody(body: LiveDomainCreateReq): CreateDomainRequest {
        this['body'] = body;
        return this;
    }
}