

export class ShowStandardByIdRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowStandardByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowStandardByIdRequest {
        this['id'] = id;
        return this;
    }
}