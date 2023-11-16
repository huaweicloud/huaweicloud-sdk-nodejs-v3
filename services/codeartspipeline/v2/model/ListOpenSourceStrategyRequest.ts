

export class ListOpenSourceStrategyRequest {
    private 'domain_id'?: string;
    public name?: string;
    private 'creator_name'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListOpenSourceStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): ListOpenSourceStrategyRequest {
        this['name'] = name;
        return this;
    }
    public withCreatorName(creatorName: string): ListOpenSourceStrategyRequest {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withLimit(limit: number): ListOpenSourceStrategyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOpenSourceStrategyRequest {
        this['offset'] = offset;
        return this;
    }
}