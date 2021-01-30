

export class ListAgenciesRequest {
    private 'domain_id': string | undefined;
    private 'trust_domain_id'?: string | undefined;
    public name?: string;
    public constructor(domainId: any) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListAgenciesRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withTrustDomainId(trustDomainId: string): ListAgenciesRequest {
        this['trust_domain_id'] = trustDomainId;
        return this;
    }
    public set trustDomainId(trustDomainId: string | undefined) {
        this['trust_domain_id'] = trustDomainId;
    }
    public get trustDomainId() {
        return this['trust_domain_id'];
    }
    public withName(name: string): ListAgenciesRequest {
        this['name'] = name;
        return this;
    }
}