

export class ListBizMetricDimensionsRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListBizMetricDimensionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListBizMetricDimensionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBizMetricDimensionsRequest {
        this['offset'] = offset;
        return this;
    }
}