import { UpdateDcDsReqDTO } from './UpdateDcDsReqDTO';


export class UpdateDcDsRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    public body?: UpdateDcDsReqDTO;
    public constructor(edgeNodeId?: string, dsId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateDcDsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): UpdateDcDsRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withBody(body: UpdateDcDsReqDTO): UpdateDcDsRequest {
        this['body'] = body;
        return this;
    }
}