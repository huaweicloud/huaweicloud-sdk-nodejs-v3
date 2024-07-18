

export class ListAutopilotReleasesRequest {
    private 'Content-Type'?: string;
    private 'cluster_id'?: string;
    private 'chart_id'?: string;
    public namespace?: string;
    public constructor(contentType?: string, clusterId?: string) { 
        this['Content-Type'] = contentType;
        this['cluster_id'] = clusterId;
    }
    public withContentType(contentType: string): ListAutopilotReleasesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withClusterId(clusterId: string): ListAutopilotReleasesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withChartId(chartId: string): ListAutopilotReleasesRequest {
        this['chart_id'] = chartId;
        return this;
    }
    public set chartId(chartId: string  | undefined) {
        this['chart_id'] = chartId;
    }
    public get chartId(): string | undefined {
        return this['chart_id'];
    }
    public withNamespace(namespace: string): ListAutopilotReleasesRequest {
        this['namespace'] = namespace;
        return this;
    }
}