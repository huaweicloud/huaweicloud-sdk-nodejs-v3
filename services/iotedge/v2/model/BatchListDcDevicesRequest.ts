

export class BatchListDcDevicesRequest {
    private 'edge_node_id'?: string;
    private 'ds_id'?: string;
    private 'device_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(edgeNodeId?: string, dsId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['ds_id'] = dsId;
    }
    public withEdgeNodeId(edgeNodeId: string): BatchListDcDevicesRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDsId(dsId: string): BatchListDcDevicesRequest {
        this['ds_id'] = dsId;
        return this;
    }
    public set dsId(dsId: string  | undefined) {
        this['ds_id'] = dsId;
    }
    public get dsId(): string | undefined {
        return this['ds_id'];
    }
    public withDeviceId(deviceId: string): BatchListDcDevicesRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withOffset(offset: number): BatchListDcDevicesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BatchListDcDevicesRequest {
        this['limit'] = limit;
        return this;
    }
}