

export class ShowDomainKeyChainRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowDomainKeyChainRequest {
        this['domain'] = domain;
        return this;
    }
}