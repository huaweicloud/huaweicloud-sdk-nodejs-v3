import { UpdateDcPointReqDTO } from './UpdateDcPointReqDTO';


export class UpdateDcPointRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    private 'point_id'?: string;
    public body?: UpdateDcPointReqDTO;
    public constructor(edgeNodeId?: string, dsId?: string, pointId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
        this['point_id'] = pointId;
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateDcPointRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): UpdateDcPointRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withPointId(pointId: string): UpdateDcPointRequest {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withBody(body: UpdateDcPointReqDTO): UpdateDcPointRequest {
        this['body'] = body;
        return this;
    }
}