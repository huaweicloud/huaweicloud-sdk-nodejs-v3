

export class ShowDomainHttpsCertRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowDomainHttpsCertRequest {
        this['domain'] = domain;
        return this;
    }
}