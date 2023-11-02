

export class ShowTableModelByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowTableModelByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowTableModelByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowTableModelByIdRequest {
        this['latest'] = latest;
        return this;
    }
}