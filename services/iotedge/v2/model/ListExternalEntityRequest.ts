

export class ListExternalEntityRequest {
    private 'edge_node_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): ListExternalEntityRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withOffset(offset: number): ListExternalEntityRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListExternalEntityRequest {
        this['limit'] = limit;
        return this;
    }
}