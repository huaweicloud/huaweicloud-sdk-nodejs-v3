

export class BatchSearchMetricHitsRequestBody {
    private 'metric_ids'?: Array<string>;
    private 'workspace_ids'?: Array<string>;
    public params?: Array<{ [key: string]: string; }>;
    private 'interactive_params'?: Array<{ [key: string]: string; }>;
    private 'field_ids'?: Array<string>;
    public constructor(metricIds?: Array<string>) { 
        this['metric_ids'] = metricIds;
    }
    public withMetricIds(metricIds: Array<string>): BatchSearchMetricHitsRequestBody {
        this['metric_ids'] = metricIds;
        return this;
    }
    public set metricIds(metricIds: Array<string>  | undefined) {
        this['metric_ids'] = metricIds;
    }
    public get metricIds(): Array<string> | undefined {
        return this['metric_ids'];
    }
    public withWorkspaceIds(workspaceIds: Array<string>): BatchSearchMetricHitsRequestBody {
        this['workspace_ids'] = workspaceIds;
        return this;
    }
    public set workspaceIds(workspaceIds: Array<string>  | undefined) {
        this['workspace_ids'] = workspaceIds;
    }
    public get workspaceIds(): Array<string> | undefined {
        return this['workspace_ids'];
    }
    public withParams(params: Array<{ [key: string]: string; }>): BatchSearchMetricHitsRequestBody {
        this['params'] = params;
        return this;
    }
    public withInteractiveParams(interactiveParams: Array<{ [key: string]: string; }>): BatchSearchMetricHitsRequestBody {
        this['interactive_params'] = interactiveParams;
        return this;
    }
    public set interactiveParams(interactiveParams: Array<{ [key: string]: string; }>  | undefined) {
        this['interactive_params'] = interactiveParams;
    }
    public get interactiveParams(): Array<{ [key: string]: string; }> | undefined {
        return this['interactive_params'];
    }
    public withFieldIds(fieldIds: Array<string>): BatchSearchMetricHitsRequestBody {
        this['field_ids'] = fieldIds;
        return this;
    }
    public set fieldIds(fieldIds: Array<string>  | undefined) {
        this['field_ids'] = fieldIds;
    }
    public get fieldIds(): Array<string> | undefined {
        return this['field_ids'];
    }
}