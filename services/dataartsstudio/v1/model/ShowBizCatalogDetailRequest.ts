

export class ShowBizCatalogDetailRequest {
    public workspace?: string;
    public id?: string;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): ShowBizCatalogDetailRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): ShowBizCatalogDetailRequest {
        this['id'] = id;
        return this;
    }
}