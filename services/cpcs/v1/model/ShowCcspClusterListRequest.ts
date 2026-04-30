

export class ShowCcspClusterListRequest {
    public limit?: number;
    public offset?: number;
    public name?: string;
    private 'service_type'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ShowCcspClusterListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowCcspClusterListRequest {
        this['offset'] = offset;
        return this;
    }
    public withName(name: string): ShowCcspClusterListRequest {
        this['name'] = name;
        return this;
    }
    public withServiceType(serviceType: string): ShowCcspClusterListRequest {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withSortKey(sortKey: string): ShowCcspClusterListRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowCcspClusterListRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}