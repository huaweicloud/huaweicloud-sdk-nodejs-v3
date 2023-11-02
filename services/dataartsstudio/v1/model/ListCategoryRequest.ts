

export class ListCategoryRequest {
    public workspace?: string;
    public limit?: number;
    public offset?: number;
    public accept?: string;
    public constructor(workspace?: string, accept?: string) { 
        this['workspace'] = workspace;
        this['accept'] = accept;
    }
    public withWorkspace(workspace: string): ListCategoryRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withLimit(limit: number): ListCategoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListCategoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withAccept(accept: string): ListCategoryRequest {
        this['accept'] = accept;
        return this;
    }
}