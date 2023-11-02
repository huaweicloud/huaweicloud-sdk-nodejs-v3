

export class ListCatalogTreeRequest {
    public workspace?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListCatalogTreeRequest {
        this['workspace'] = workspace;
        return this;
    }
}