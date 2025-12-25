

export class ListCollectorInstancesRequest {
    private 'workspace_id'?: string;
    private 'channel_id'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListCollectorInstancesRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorInstancesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withChannelId(channelId: string): ListCollectorInstancesRequest {
        this['channel_id'] = channelId;
        return this;
    }
    public set channelId(channelId: string  | undefined) {
        this['channel_id'] = channelId;
    }
    public get channelId(): string | undefined {
        return this['channel_id'];
    }
    public withNodeId(nodeId: string): ListCollectorInstancesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ListCollectorInstancesRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withOffset(offset: number): ListCollectorInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectorInstancesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorInstancesRequestSortDirEnum | string): ListCollectorInstancesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorInstancesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorInstancesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorInstancesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
