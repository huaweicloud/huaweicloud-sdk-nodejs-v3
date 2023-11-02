

export class ShowDimensionLogicTableByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowDimensionLogicTableByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowDimensionLogicTableByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowDimensionLogicTableByIdRequest {
        this['latest'] = latest;
        return this;
    }
}