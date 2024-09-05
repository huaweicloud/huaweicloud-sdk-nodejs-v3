

export class ListAgenciesRequest {
    private 'domain_id'?: string;
    private 'trust_domain_id'?: string;
    public name?: string;
    public page?: number;
    private 'per_page'?: number;
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
    public withPage(page: number): ListAgenciesRequest {
        this['page'] = page;
        return this;
    }
    public withPerPage(perPage: number): ListAgenciesRequest {
        this['per_page'] = perPage;
        return this;
    }
    public set perPage(perPage: number  | undefined) {
        this['per_page'] = perPage;
    }
    public get perPage(): number | undefined {
        return this['per_page'];
    }
}