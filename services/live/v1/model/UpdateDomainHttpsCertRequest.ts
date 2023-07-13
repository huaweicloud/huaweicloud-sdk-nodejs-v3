import { DomainHttpsCertInfo } from './DomainHttpsCertInfo';


export class UpdateDomainHttpsCertRequest {
    public domain: string;
    public body?: DomainHttpsCertInfo;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): UpdateDomainHttpsCertRequest {
        this['domain'] = domain;
        return this;
    }
    public withBody(body: DomainHttpsCertInfo): UpdateDomainHttpsCertRequest {
        this['body'] = body;
        return this;
    }
}