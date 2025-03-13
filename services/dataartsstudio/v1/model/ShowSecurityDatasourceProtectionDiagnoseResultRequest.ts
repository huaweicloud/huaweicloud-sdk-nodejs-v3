

export class ShowSecurityDatasourceProtectionDiagnoseResultRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowSecurityDatasourceProtectionDiagnoseResultRequest {
        this['workspace'] = workspace;
        return this;
    }
}