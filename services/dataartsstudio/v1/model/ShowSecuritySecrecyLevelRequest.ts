

export class ShowSecuritySecrecyLevelRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowSecuritySecrecyLevelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowSecuritySecrecyLevelRequest {
        this['id'] = id;
        return this;
    }
}