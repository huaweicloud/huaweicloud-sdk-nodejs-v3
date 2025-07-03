

export class ListConfsRequest {
    private 'cluster_id'?: string;
    public start?: string;
    public limit?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListConfsRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStart(start: string): ListConfsRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: string): ListConfsRequest {
        this['limit'] = limit;
        return this;
    }
}