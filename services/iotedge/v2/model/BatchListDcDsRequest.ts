

export class BatchListDcDsRequest {
    private 'edge_node_id'?: string;
    private 'module_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): BatchListDcDsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withModuleId(moduleId: string): BatchListDcDsRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withOffset(offset: number): BatchListDcDsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListDcDsRequest {
        this['limit'] = limit;
        return this;
    }
}