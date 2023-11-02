

export class ShowConsistencyTaskDetailRequest {
    public id?: string;
    public workspace?: string;
    public constructor(id?: string, workspace?: string) { 
        this['id'] = id;
        this['workspace'] = workspace;
    }
    public withId(id: string): ShowConsistencyTaskDetailRequest {
        this['id'] = id;
        return this;
    }
    public withWorkspace(workspace: string): ShowConsistencyTaskDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
}