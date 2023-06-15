

export class DeleteDomainKeyChainRequest {
    public domain: string;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteDomainKeyChainRequest {
        this['domain'] = domain;
        return this;
    }
}