

export class ShowConditionByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowConditionByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowConditionByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowConditionByIdRequest {
        this['latest'] = latest;
        return this;
    }
}