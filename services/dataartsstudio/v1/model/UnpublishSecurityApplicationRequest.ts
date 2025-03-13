

export class UnpublishSecurityApplicationRequest {
    public id?: string;
    public workspace?: string;
    public constructor(id?: string, workspace?: string) { 
        this['id'] = id;
        this['workspace'] = workspace;
    }
    public withId(id: string): UnpublishSecurityApplicationRequest {
        this['id'] = id;
        return this;
    }
    public withWorkspace(workspace: string): UnpublishSecurityApplicationRequest {
        this['workspace'] = workspace;
        return this;
    }
}