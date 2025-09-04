import { CreateExternalEntityReqDTO } from './CreateExternalEntityReqDTO';


export class CreateExternalEntityRequest {
    private 'edge_node_id'?: string;
    public body?: CreateExternalEntityReqDTO;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateExternalEntityRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: CreateExternalEntityReqDTO): CreateExternalEntityRequest {
        this['body'] = body;
        return this;
    }
}