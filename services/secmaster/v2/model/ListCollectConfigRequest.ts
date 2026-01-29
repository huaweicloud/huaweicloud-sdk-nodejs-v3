

export class ListCollectConfigRequest {
    private 'region_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public csvc?: string;
    private 'domain_id'?: string;
    private 'query_statistics'?: boolean;
    public constructor() { 
    }
    public withRegionId(regionId: string): ListCollectConfigRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withOffset(offset: number): ListCollectConfigRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectConfigRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectConfigRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListCollectConfigRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withCsvc(csvc: string): ListCollectConfigRequest {
        this['csvc'] = csvc;
        return this;
    }
    public withDomainId(domainId: string): ListCollectConfigRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withQueryStatistics(queryStatistics: boolean): ListCollectConfigRequest {
        this['query_statistics'] = queryStatistics;
        return this;
    }
    public set queryStatistics(queryStatistics: boolean  | undefined) {
        this['query_statistics'] = queryStatistics;
    }
    public get queryStatistics(): boolean | undefined {
        return this['query_statistics'];
    }
}