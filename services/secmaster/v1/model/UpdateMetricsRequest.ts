import { CreateMetricRequestBody } from './CreateMetricRequestBody';


export class UpdateMetricsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'metric_id'?: string;
    public body?: CreateMetricRequestBody;
    public constructor(contentType?: string, workspaceId?: string, metricId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['metric_id'] = metricId;
    }
    public withContentType(contentType: string): UpdateMetricsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdateMetricsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withMetricId(metricId: string): UpdateMetricsRequest {
        this['metric_id'] = metricId;
        return this;
    }
    public set metricId(metricId: string  | undefined) {
        this['metric_id'] = metricId;
    }
    public get metricId(): string | undefined {
        return this['metric_id'];
    }
    public withBody(body: CreateMetricRequestBody): UpdateMetricsRequest {
        this['body'] = body;
        return this;
    }
}