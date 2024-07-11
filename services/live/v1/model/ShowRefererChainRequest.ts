

export class ShowRefererChainRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowRefererChainRequest {
        this['domain'] = domain;
        return this;
    }
}