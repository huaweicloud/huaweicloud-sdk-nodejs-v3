

export class ListCollectorConnectionsRequest {
    private 'workspace_id'?: string;
    private 'connection_type'?: ListCollectorConnectionsRequestConnectionTypeEnum | string;
    public title?: string;
    public description?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListCollectorConnectionsRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorConnectionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withConnectionType(connectionType: ListCollectorConnectionsRequestConnectionTypeEnum | string): ListCollectorConnectionsRequest {
        this['connection_type'] = connectionType;
        return this;
    }
    public set connectionType(connectionType: ListCollectorConnectionsRequestConnectionTypeEnum | string  | undefined) {
        this['connection_type'] = connectionType;
    }
    public get connectionType(): ListCollectorConnectionsRequestConnectionTypeEnum | string | undefined {
        return this['connection_type'];
    }
    public withTitle(title: string): ListCollectorConnectionsRequest {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): ListCollectorConnectionsRequest {
        this['description'] = description;
        return this;
    }
    public withOffset(offset: number): ListCollectorConnectionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectorConnectionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorConnectionsRequestSortDirEnum | string): ListCollectorConnectionsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorConnectionsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorConnectionsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorConnectionsRequestConnectionTypeEnum {
    FILTER = 'FILTER',
    INPUT = 'INPUT',
    OUTPUT = 'OUTPUT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListCollectorConnectionsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
