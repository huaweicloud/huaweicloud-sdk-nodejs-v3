

export class ListSyncRecordsRequest {
    private 'cluster_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListSyncRecordsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withOffset(offset: number): ListSyncRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSyncRecordsRequest {
        this['limit'] = limit;
        return this;
    }
}