

export class DomainsStatusesRequestBody {
    private 'domain_ids'?: string;
    public constructor() { 
    }
    public withDomainIds(domainIds: string): DomainsStatusesRequestBody {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: string  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): string | undefined {
        return this['domain_ids'];
    }
}