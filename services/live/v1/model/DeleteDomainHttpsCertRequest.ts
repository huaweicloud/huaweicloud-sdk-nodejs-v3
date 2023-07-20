

export class DeleteDomainHttpsCertRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainHttpsCertRequest {
        this['domain'] = domain;
        return this;
    }
}