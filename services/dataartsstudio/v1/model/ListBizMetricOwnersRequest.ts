

export class ListBizMetricOwnersRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListBizMetricOwnersRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListBizMetricOwnersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListBizMetricOwnersRequest {
        this['offset'] = offset;
        return this;
    }
}