

export class ShowRelationByIdRequest {
    public workspace?: string;
    public id?: string;
    public latest?: boolean;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowRelationByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowRelationByIdRequest {
        this['id'] = id;
        return this;
    }
    public withLatest(latest: boolean): ShowRelationByIdRequest {
        this['latest'] = latest;
        return this;
    }
}