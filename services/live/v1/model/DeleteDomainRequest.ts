

export class DeleteDomainRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainRequest {
        this['domain'] = domain;
        return this;
    }
}