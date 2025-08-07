

export class ListMarketplaceEngineProductsRequest {
    private 'X-Language'?: string;
    private 'bp_domain_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'engine_id'?: string;
    public constructor(bpDomainId?: string) { 
        this['bp_domain_id'] = bpDomainId;
    }
    public withXLanguage(xLanguage: string): ListMarketplaceEngineProductsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBpDomainId(bpDomainId: string): ListMarketplaceEngineProductsRequest {
        this['bp_domain_id'] = bpDomainId;
        return this;
    }
    public set bpDomainId(bpDomainId: string  | undefined) {
        this['bp_domain_id'] = bpDomainId;
    }
    public get bpDomainId(): string | undefined {
        return this['bp_domain_id'];
    }
    public withOffset(offset: number): ListMarketplaceEngineProductsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMarketplaceEngineProductsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEngineId(engineId: string): ListMarketplaceEngineProductsRequest {
        this['engine_id'] = engineId;
        return this;
    }
    public set engineId(engineId: string  | undefined) {
        this['engine_id'] = engineId;
    }
    public get engineId(): string | undefined {
        return this['engine_id'];
    }
}