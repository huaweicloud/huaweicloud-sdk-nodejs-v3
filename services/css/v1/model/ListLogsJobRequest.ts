

export class ListLogsJobRequest {
    private 'cluster_id'?: string;
    public start?: number;
    public limit?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListLogsJobRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStart(start: number): ListLogsJobRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: number): ListLogsJobRequest {
        this['limit'] = limit;
        return this;
    }
}