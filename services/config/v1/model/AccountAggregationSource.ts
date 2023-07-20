

export class AccountAggregationSource {
    private 'domain_ids'?: Array<string>;
    public constructor() { 
    }
    public withDomainIds(domainIds: Array<string>): AccountAggregationSource {
        this['domain_ids'] = domainIds;
        return this;
    }
    public set domainIds(domainIds: Array<string>  | undefined) {
        this['domain_ids'] = domainIds;
    }
    public get domainIds(): Array<string> | undefined {
        return this['domain_ids'];
    }
}