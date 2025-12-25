

export class ListPlaybooksRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'search_txt'?: string;
    public enabled?: boolean;
    public offset?: number;
    public limit?: number;
    public description?: string;
    private 'dataclass_name'?: string;
    public name?: string;
    public constructor(contentType?: string, workspaceId?: string, offset?: number, limit?: number) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withContentType(contentType: string): ListPlaybooksRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ListPlaybooksRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSearchTxt(searchTxt: string): ListPlaybooksRequest {
        this['search_txt'] = searchTxt;
        return this;
    }
    public set searchTxt(searchTxt: string  | undefined) {
        this['search_txt'] = searchTxt;
    }
    public get searchTxt(): string | undefined {
        return this['search_txt'];
    }
    public withEnabled(enabled: boolean): ListPlaybooksRequest {
        this['enabled'] = enabled;
        return this;
    }
    public withOffset(offset: number): ListPlaybooksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPlaybooksRequest {
        this['limit'] = limit;
        return this;
    }
    public withDescription(description: string): ListPlaybooksRequest {
        this['description'] = description;
        return this;
    }
    public withDataclassName(dataclassName: string): ListPlaybooksRequest {
        this['dataclass_name'] = dataclassName;
        return this;
    }
    public set dataclassName(dataclassName: string  | undefined) {
        this['dataclass_name'] = dataclassName;
    }
    public get dataclassName(): string | undefined {
        return this['dataclass_name'];
    }
    public withName(name: string): ListPlaybooksRequest {
        this['name'] = name;
        return this;
    }
}