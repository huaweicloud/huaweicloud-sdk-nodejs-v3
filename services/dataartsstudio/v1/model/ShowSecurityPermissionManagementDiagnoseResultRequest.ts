

export class ShowSecurityPermissionManagementDiagnoseResultRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowSecurityPermissionManagementDiagnoseResultRequest {
        this['workspace'] = workspace;
        return this;
    }
}