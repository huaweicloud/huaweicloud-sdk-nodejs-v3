import { UpdateNodeReqDTO } from './UpdateNodeReqDTO';


export class UpdateEdgeNodeRequest {
    private 'edge_node_id'?: string;
    public body?: UpdateNodeReqDTO;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateEdgeNodeRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: UpdateNodeReqDTO): UpdateEdgeNodeRequest {
        this['body'] = body;
        return this;
    }
}