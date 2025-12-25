

export class ShowMetricMetaDataRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'metric_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, metricId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['metric_id'] = metricId;
    }
    public withContentType(contentType: string): ShowMetricMetaDataRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowMetricMetaDataRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMetricId(metricId: string): ShowMetricMetaDataRequest {
        this['metric_id'] = metricId;
        return this;
    }
    public set metricId(metricId: string  | undefined) {
        this['metric_id'] = metricId;
    }
    public get metricId(): string | undefined {
        return this['metric_id'];
    }
}