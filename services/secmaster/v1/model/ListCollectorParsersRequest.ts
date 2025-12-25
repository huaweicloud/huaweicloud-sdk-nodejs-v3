

export class ListCollectorParsersRequest {
    private 'workspace_id'?: string;
    private 'query_type'?: ListCollectorParsersRequestQueryTypeEnum | string;
    public title?: string;
    public description?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: number;
    private 'sort_dir'?: ListCollectorParsersRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorParsersRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withQueryType(queryType: ListCollectorParsersRequestQueryTypeEnum | string): ListCollectorParsersRequest {
        this['query_type'] = queryType;
        return this;
    }
    public set queryType(queryType: ListCollectorParsersRequestQueryTypeEnum | string  | undefined) {
        this['query_type'] = queryType;
    }
    public get queryType(): ListCollectorParsersRequestQueryTypeEnum | string | undefined {
        return this['query_type'];
    }
    public withTitle(title: string): ListCollectorParsersRequest {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ListCollectorParsersRequest {
        this['description'] = description;
        return this;
    }
    public withOffset(offset: number): ListCollectorParsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorParsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: number): ListCollectorParsersRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: number  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): number | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorParsersRequestSortDirEnum | string): ListCollectorParsersRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorParsersRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorParsersRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorParsersRequestQueryTypeEnum {
    QUICK = 'QUICK',
    GENERAL = 'GENERAL'
}
/**
    * @export
    * @enum {string}
    */
export enum ListCollectorParsersRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
