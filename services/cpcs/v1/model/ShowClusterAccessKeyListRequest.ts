

export class ShowClusterAccessKeyListRequest {
    private 'cluster_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'app_name'?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ShowClusterAccessKeyListRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ShowClusterAccessKeyListRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowClusterAccessKeyListRequest {
        this['offset'] = offset;
        return this;
    }
    public withAppName(appName: string): ShowClusterAccessKeyListRequest {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withSortKey(sortKey: string): ShowClusterAccessKeyListRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ShowClusterAccessKeyListRequest {
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