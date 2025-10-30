

export class ListStoragePoolsRequest {
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: Array<string>;
    private 'sort_dir'?: Array<string>;
    private 'edge_site_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListStoragePoolsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStoragePoolsRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: Array<string>): ListStoragePoolsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: Array<string>  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): Array<string> | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: Array<string>): ListStoragePoolsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: Array<string>  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): Array<string> | undefined {
        return this['sort_dir'];
    }
    public withEdgeSiteId(edgeSiteId: string): ListStoragePoolsRequest {
        this['edge_site_id'] = edgeSiteId;
        return this;
    }
    public set edgeSiteId(edgeSiteId: string  | undefined) {
        this['edge_site_id'] = edgeSiteId;
    }
    public get edgeSiteId(): string | undefined {
        return this['edge_site_id'];
    }
}