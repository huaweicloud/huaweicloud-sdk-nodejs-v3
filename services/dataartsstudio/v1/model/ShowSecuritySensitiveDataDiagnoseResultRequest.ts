

export class ShowSecuritySensitiveDataDiagnoseResultRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowSecuritySensitiveDataDiagnoseResultRequest {
        this['workspace'] = workspace;
        return this;
    }
}