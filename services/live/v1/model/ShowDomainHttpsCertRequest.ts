

export class ShowDomainHttpsCertRequest {
    public domain: string;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowDomainHttpsCertRequest {
        this['domain'] = domain;
        return this;
    }
}