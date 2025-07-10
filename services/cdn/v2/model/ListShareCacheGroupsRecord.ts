

export class ListShareCacheGroupsRecord {
    private 'domain_name'?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): ListShareCacheGroupsRecord {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}