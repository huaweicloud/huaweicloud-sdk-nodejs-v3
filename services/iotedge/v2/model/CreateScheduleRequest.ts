import { CreateScheduleReqDTO } from './CreateScheduleReqDTO';


export class CreateScheduleRequest {
    private 'edge_node_id'?: string;
    public body?: CreateScheduleReqDTO;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateScheduleRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: CreateScheduleReqDTO): CreateScheduleRequest {
        this['body'] = body;
        return this;
    }
}