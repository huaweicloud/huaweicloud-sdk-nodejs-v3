

export class SearchCodeTableValuesRequest {
    public workspace?: string;
    public id?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): SearchCodeTableValuesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): SearchCodeTableValuesRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): SearchCodeTableValuesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCodeTableValuesRequest {
        this['offset'] = offset;
        return this;
    }
}