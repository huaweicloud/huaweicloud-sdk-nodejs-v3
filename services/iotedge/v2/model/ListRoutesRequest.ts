

export class ListRoutesRequest {
    private 'edge_node_id'?: string;
    public parsed?: boolean;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): ListRoutesRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withParsed(parsed: boolean): ListRoutesRequest {
        this['parsed'] = parsed;
        return this;
    }
}