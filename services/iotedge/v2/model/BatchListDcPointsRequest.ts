

export class BatchListDcPointsRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    private 'point_id'?: string;
    public name?: string;
    public property?: string;
    private 'device_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(edgeNodeId?: string, dsId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
    }
    public withEdgeNodeId(edgeNodeId: string): BatchListDcPointsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): BatchListDcPointsRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withPointId(pointId: string): BatchListDcPointsRequest {
        this['point_id'] = pointId;
        return this;
    }
    public set pointId(pointId: string  | undefined) {
        this['point_id'] = pointId;
    }
    public get pointId(): string | undefined {
        return this['point_id'];
    }
    public withName(name: string): BatchListDcPointsRequest {
        this['name'] = name;
        return this;
    }
    public withProperty(property: string): BatchListDcPointsRequest {
        this['property'] = property;
        return this;
    }
    public withDeviceId(deviceId: string): BatchListDcPointsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withOffset(offset: number): BatchListDcPointsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListDcPointsRequest {
        this['limit'] = limit;
        return this;
    }
}