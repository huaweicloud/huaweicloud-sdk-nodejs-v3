

export class ListClusterSnapshotsRequest {
    private 'cluster_id': string | undefined;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string | undefined;
    private 'sort_dir'?: string | undefined;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListClusterSnapshotsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ListClusterSnapshotsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListClusterSnapshotsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListClusterSnapshotsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey() {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListClusterSnapshotsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir() {
        return this['sort_dir'];
    }
}