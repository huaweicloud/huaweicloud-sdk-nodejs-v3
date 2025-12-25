

export class ListNodesRequest {
    private 'workspace_id'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: number;
    private 'sort_dir'?: ListNodesRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListNodesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withNodeId(nodeId: string): ListNodesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ListNodesRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withOffset(offset: number): ListNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: number): ListNodesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: number  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): number | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListNodesRequestSortDirEnum | string): ListNodesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListNodesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListNodesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNodesRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
