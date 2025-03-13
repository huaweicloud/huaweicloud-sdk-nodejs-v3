

export class ShowSecurityAdminRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowSecurityAdminRequest {
        this['workspace'] = workspace;
        return this;
    }
}