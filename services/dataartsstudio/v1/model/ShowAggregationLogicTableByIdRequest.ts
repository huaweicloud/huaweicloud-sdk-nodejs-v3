

export class ShowAggregationLogicTableByIdRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowAggregationLogicTableByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ShowAggregationLogicTableByIdRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ShowAggregationLogicTableByIdRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withId(id: string): ShowAggregationLogicTableByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowAggregationLogicTableByIdRequest {
        this['latest'] = latest;
        return this;
    }
}