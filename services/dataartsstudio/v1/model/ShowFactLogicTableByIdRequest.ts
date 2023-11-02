

export class ShowFactLogicTableByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowFactLogicTableByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowFactLogicTableByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowFactLogicTableByIdRequest {
        this['latest'] = latest;
        return this;
    }
}