

export class DeleteEdgeNodeRequest {
    private 'edge_node_id'?: string;
    private 'delete_external_node'?: boolean;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): DeleteEdgeNodeRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDeleteExternalNode(deleteExternalNode: boolean): DeleteEdgeNodeRequest {
        this['delete_external_node'] = deleteExternalNode;
        return this;
    }
    public set deleteExternalNode(deleteExternalNode: boolean  | undefined) {
        this['delete_external_node'] = deleteExternalNode;
    }
    public get deleteExternalNode(): boolean | undefined {
        return this['delete_external_node'];
    }
}