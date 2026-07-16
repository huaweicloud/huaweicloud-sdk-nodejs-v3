

export class ListNodesRequest {
    private 'cluster_id'?: string;
    private 'Content-Type'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(clusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): ListNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withContentType(contentType: string): ListNodesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withLimit(limit: number): ListNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListNodesRequest {
        this['marker'] = marker;
        return this;
    }
}