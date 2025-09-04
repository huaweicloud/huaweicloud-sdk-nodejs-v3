

export class DeleteDcPointRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    private 'point_id'?: string;
    private 'device_id'?: string;
    public property?: string;
    public constructor(edgeNodeId?: string, dsId?: string, pointId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
        this['point_id'] = pointId;
    }
    public withEdgeNodeId(edgeNodeId: string): DeleteDcPointRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): DeleteDcPointRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withPointId(pointId: string): DeleteDcPointRequest {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withDeviceId(deviceId: string): DeleteDcPointRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withProperty(property: string): DeleteDcPointRequest {
        this['property'] = property;
        return this;
    }
}