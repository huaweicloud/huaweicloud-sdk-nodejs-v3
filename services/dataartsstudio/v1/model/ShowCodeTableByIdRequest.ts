

export class ShowCodeTableByIdRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowCodeTableByIdRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowCodeTableByIdRequest {
        this['id'] = id;
        return this;
    }
}