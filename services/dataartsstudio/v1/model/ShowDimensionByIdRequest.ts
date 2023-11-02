

export class ShowDimensionByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowDimensionByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowDimensionByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowDimensionByIdRequest {
        this['latest'] = latest;
        return this;
    }
}