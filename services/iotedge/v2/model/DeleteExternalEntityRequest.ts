

export class DeleteExternalEntityRequest {
    private 'edge_node_id'?: string;
    private 'external_id'?: string;
    public constructor(edgeNodeId?: string, externalId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['external_id'] = externalId;
    }
    public withEdgeNodeId(edgeNodeId: string): DeleteExternalEntityRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withExternalId(externalId: string): DeleteExternalEntityRequest {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
}