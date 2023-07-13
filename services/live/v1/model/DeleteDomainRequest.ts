

export class DeleteDomainRequest {
    public domain: string;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainRequest {
        this['domain'] = domain;
        return this;
    }
}