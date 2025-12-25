

export class ListCollectorChannelsRequest {
    private 'workspace_id'?: string;
    public title?: string;
    private 'connection_module_id'?: string;
    private 'parser_id'?: string;
    private 'group_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListCollectorChannelsRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorChannelsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTitle(title: string): ListCollectorChannelsRequest {
        this['title'] = title;
        return this;
    }
    public withConnectionModuleId(connectionModuleId: string): ListCollectorChannelsRequest {
        this['connection_module_id'] = connectionModuleId;
        return this;
    }
    public set connectionModuleId(connectionModuleId: string  | undefined) {
        this['connection_module_id'] = connectionModuleId;
    }
    public get connectionModuleId(): string | undefined {
        return this['connection_module_id'];
    }
    public withParserId(parserId: string): ListCollectorChannelsRequest {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withGroupId(groupId: string): ListCollectorChannelsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListCollectorChannelsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorChannelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectorChannelsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorChannelsRequestSortDirEnum | string): ListCollectorChannelsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorChannelsRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorChannelsRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorChannelsRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
