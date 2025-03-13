

export class ListSecurityDataCategoriesRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListSecurityDataCategoriesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListSecurityDataCategoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListSecurityDataCategoriesRequest {
        this['offset'] = offset;
        return this;
    }
}