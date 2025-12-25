

export class ListRunningNodesRequest {
    private 'workspace_id'?: string;
    private 'component_id'?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string, componentId?: string) { 
        this['workspace_id'] = workspaceId;
        this['component_id'] = componentId;
    }
    public withWorkspaceId(workspaceId: string): ListRunningNodesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withComponentId(componentId: string): ListRunningNodesRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withNodeId(nodeId: string): ListRunningNodesRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ListRunningNodesRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withLimit(limit: number): ListRunningNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRunningNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListRunningNodesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListRunningNodesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}