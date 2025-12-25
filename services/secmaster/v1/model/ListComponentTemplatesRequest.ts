

export class ListComponentTemplatesRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'search_value'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(contentType?: string, workspaceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
    }
    public withContentType(contentType: string): ListComponentTemplatesRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListComponentTemplatesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSearchValue(searchValue: string): ListComponentTemplatesRequest {
        this['search_value'] = searchValue;
        return this;
    }
    public set searchValue(searchValue: string  | undefined) {
        this['search_value'] = searchValue;
    }
    public get searchValue(): string | undefined {
        return this['search_value'];
    }
    public withOffset(offset: number): ListComponentTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListComponentTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}