

export class ShowQualityTaskDetailRequest {
    public id?: string;
    public workspace?: string;
    public constructor(id?: string, workspace?: string) { 
        this['id'] = id;
        this['workspace'] = workspace;
    }
    public withId(id: string): ShowQualityTaskDetailRequest {
        this['id'] = id;
        return this;
    }
    public withWorkspace(workspace: string): ShowQualityTaskDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
}