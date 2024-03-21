

export class DeleteSecuritySecrecyLevelRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): DeleteSecuritySecrecyLevelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): DeleteSecuritySecrecyLevelRequest {
        this['id'] = id;
        return this;
    }
}