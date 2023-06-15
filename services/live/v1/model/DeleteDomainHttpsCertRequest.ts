

export class DeleteDomainHttpsCertRequest {
    public domain: string;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainHttpsCertRequest {
        this['domain'] = domain;
        return this;
    }
}