

export class DeleteRefererChainRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DeleteRefererChainRequest {
        this['domain'] = domain;
        return this;
    }
}