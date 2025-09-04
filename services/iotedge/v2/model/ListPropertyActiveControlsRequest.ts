

export class ListPropertyActiveControlsRequest {
    private 'edge_node_id'?: string;
    private 'device_id'?: string;
    private 'service_id'?: string;
    public property?: string;
    public constructor(edgeNodeId?: string, deviceId?: string, property?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['device_id'] = deviceId;
        this['property'] = property;
    }
    public withEdgeNodeId(edgeNodeId: string): ListPropertyActiveControlsRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDeviceId(deviceId: string): ListPropertyActiveControlsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withServiceId(serviceId: string): ListPropertyActiveControlsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withProperty(property: string): ListPropertyActiveControlsRequest {
        this['property'] = property;
        return this;
    }
}