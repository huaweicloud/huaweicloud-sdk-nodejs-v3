

export class ListPublisherRequest {
    private 'domain_id'?: string;
    public offset?: string;
    public limit?: string;
    public name?: string;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListPublisherRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOffset(offset: string): ListPublisherRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListPublisherRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListPublisherRequest {
        this['name'] = name;
        return this;
    }
}