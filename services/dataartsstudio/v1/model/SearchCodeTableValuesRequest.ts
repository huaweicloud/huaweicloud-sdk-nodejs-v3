

export class SearchCodeTableValuesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
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
    public withXProjectId(xProjectId: string): SearchCodeTableValuesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): SearchCodeTableValuesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
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