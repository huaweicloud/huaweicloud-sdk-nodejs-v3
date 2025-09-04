import { CreateDcPointReqDTO } from './CreateDcPointReqDTO';


export class CreateDcPointRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    public body?: CreateDcPointReqDTO;
    public constructor(edgeNodeId?: string, dsId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
    }
    public withEdgeNodeId(edgeNodeId: string): CreateDcPointRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): CreateDcPointRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withBody(body: CreateDcPointReqDTO): CreateDcPointRequest {
        this['body'] = body;
        return this;
    }
}