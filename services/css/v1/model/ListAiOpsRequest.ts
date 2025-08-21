

export class ListAiOpsRequest {
    private 'cluster_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListAiOpsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withLimit(limit: number): ListAiOpsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListAiOpsRequest {
        this['offset'] = offset;
        return this;
    }
}