

export class ShowDerivativeIndexByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowDerivativeIndexByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowDerivativeIndexByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowDerivativeIndexByIdRequest {
        this['latest'] = latest;
        return this;
    }
}