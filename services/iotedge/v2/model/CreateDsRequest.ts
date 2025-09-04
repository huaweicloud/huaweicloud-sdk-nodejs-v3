import { CreateDcDsReqDTO } from './CreateDcDsReqDTO';


export class CreateDsRequest {
    private 'edge_node_id'?: string;
    public body?: CreateDcDsReqDTO;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateDsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: CreateDcDsReqDTO): CreateDsRequest {
        this['body'] = body;
        return this;
    }
}