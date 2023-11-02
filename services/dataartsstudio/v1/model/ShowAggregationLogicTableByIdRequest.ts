

export class ShowAggregationLogicTableByIdRequest {
    public workspace?: string;
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
    public withId(id: string): ShowAggregationLogicTableByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowAggregationLogicTableByIdRequest {
        this['latest'] = latest;
        return this;
    }
}