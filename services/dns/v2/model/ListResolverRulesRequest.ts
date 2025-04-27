

export class ListResolverRulesRequest {
    private 'domain_name'?: string;
    public name?: string;
    private 'endpoint_id'?: string;
    public id?: string;
    public limit?: number;
    public offset?: number;
    public marker?: string;
    public constructor() { 
    }
    public withDomainName(domainName: string): ListResolverRulesRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withName(name: string): ListResolverRulesRequest {
        this['name'] = name;
        return this;
    }
    public withEndpointId(endpointId: string): ListResolverRulesRequest {
        this['endpoint_id'] = endpointId;
        return this;
    }
    public set endpointId(endpointId: string  | undefined) {
        this['endpoint_id'] = endpointId;
    }
    public get endpointId(): string | undefined {
        return this['endpoint_id'];
    }
    public withId(id: string): ListResolverRulesRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListResolverRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListResolverRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withMarker(marker: string): ListResolverRulesRequest {
        this['marker'] = marker;
        return this;
    }
}