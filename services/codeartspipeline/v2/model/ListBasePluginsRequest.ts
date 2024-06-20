

export class ListBasePluginsRequest {
    private 'domain_id'?: string;
    public attribution?: string;
    public offset?: string;
    public limit?: string;
    public constructor(domainId?: string, attribution?: string, offset?: string, limit?: string) { 
        this['domain_id'] = domainId;
        this['attribution'] = attribution;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withDomainId(domainId: string): ListBasePluginsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withAttribution(attribution: string): ListBasePluginsRequest {
        this['attribution'] = attribution;
        return this;
    }
    public withOffset(offset: string): ListBasePluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListBasePluginsRequest {
        this['limit'] = limit;
        return this;
    }
}