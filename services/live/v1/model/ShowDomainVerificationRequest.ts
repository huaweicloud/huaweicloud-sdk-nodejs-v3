

export class ShowDomainVerificationRequest {
    public domain?: string;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): ShowDomainVerificationRequest {
        this['domain'] = domain;
        return this;
    }
}