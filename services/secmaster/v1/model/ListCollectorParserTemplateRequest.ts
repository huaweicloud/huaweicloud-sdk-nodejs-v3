

export class ListCollectorParserTemplateRequest {
    private 'workspace_id'?: string;
    public title?: string;
    public description?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListCollectorParserTemplateRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorParserTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTitle(title: string): ListCollectorParserTemplateRequest {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ListCollectorParserTemplateRequest {
        this['description'] = description;
        return this;
    }
    public withOffset(offset: number): ListCollectorParserTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorParserTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectorParserTemplateRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorParserTemplateRequestSortDirEnum | string): ListCollectorParserTemplateRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorParserTemplateRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorParserTemplateRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorParserTemplateRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
