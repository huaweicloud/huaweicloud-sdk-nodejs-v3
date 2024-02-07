import { DomainBody } from './DomainBody';


export class CreateDomainRequestBody {
    public domain?: DomainBody;
    public constructor(domain?: DomainBody) { 
        this['domain'] = domain;
    }
    public withDomain(domain: DomainBody): CreateDomainRequestBody {
        this['domain'] = domain;
        return this;
    }
}