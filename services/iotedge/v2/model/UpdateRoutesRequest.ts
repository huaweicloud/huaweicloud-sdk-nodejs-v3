import { CreateRouterReqDTO } from './CreateRouterReqDTO';


export class UpdateRoutesRequest {
    private 'edge_node_id'?: string;
    public body?: Array<CreateRouterReqDTO>;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateRoutesRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: Array<CreateRouterReqDTO>): UpdateRoutesRequest {
        this['body'] = body;
        return this;
    }
}