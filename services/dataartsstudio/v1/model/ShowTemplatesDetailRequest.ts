

export class ShowTemplatesDetailRequest {
    public id?: number;
    public workspace?: string;
    public constructor(id?: number, workspace?: string) { 
        this['id'] = id;
        this['workspace'] = workspace;
    }
    public withId(id: number): ShowTemplatesDetailRequest {
        this['id'] = id;
        return this;
    }
    public withWorkspace(workspace: string): ShowTemplatesDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
}