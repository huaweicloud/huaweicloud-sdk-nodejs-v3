

export class ListAgenciesRequest {
    private 'domain_id'?: string;
    private 'trust_domain_id'?: string;
    public name?: string;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListAgenciesRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withTrustDomainId(trustDomainId: string): ListAgenciesRequest {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string  | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId(): string | undefined {
        return this['trust_domain_id'];
    }
    public withName(name: string): ListAgenciesRequest {
        this['name'] = name;
        return this;
    }
}