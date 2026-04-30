

export class ShowCcspInstanceInfoRequest {
    public limit?: number;
    public name?: string;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'cluster_id'?: string;
    public status?: number;
    private 'is_normal'?: boolean;
    public constructor() { 
    }
    public withLimit(limit: number): ShowCcspInstanceInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ShowCcspInstanceInfoRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: number): ShowCcspInstanceInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ShowCcspInstanceInfoRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowCcspInstanceInfoRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withClusterId(clusterId: string): ShowCcspInstanceInfoRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStatus(status: number): ShowCcspInstanceInfoRequest {
        this['status'] = status;
        return this;
    }
    public withIsNormal(isNormal: boolean): ShowCcspInstanceInfoRequest {
        this['is_normal'] = isNormal;
        return this;
    }
    public set isNormal(isNormal: boolean  | undefined) {
        this['is_normal'] = isNormal;
    }
    public get isNormal(): boolean | undefined {
        return this['is_normal'];
    }
}