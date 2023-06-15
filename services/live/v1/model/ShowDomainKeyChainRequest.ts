

export class ShowDomainKeyChainRequest {
    public domain: string;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowDomainKeyChainRequest {
        this['domain'] = domain;
        return this;
    }
}