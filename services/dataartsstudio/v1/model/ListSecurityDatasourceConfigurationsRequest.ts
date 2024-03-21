

export class ListSecurityDatasourceConfigurationsRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDatasourceConfigurationsRequest {
        this['workspace'] = workspace;
        return this;
    }
}