

export class ListDevicesRequest {
    private 'edge_node_id'?: string;
    private 'gateway_id'?: string;
    private 'device_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): ListDevicesRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withGatewayId(gatewayId: string): ListDevicesRequest {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withDeviceName(deviceName: string): ListDevicesRequest {
        this['device_name'] = deviceName;
        return this;
    }
    public set deviceName(deviceName: string  | undefined) {
        this['device_name'] = deviceName;
    }
    public get deviceName(): string | undefined {
        return this['device_name'];
    }
    public withOffset(offset: number): ListDevicesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDevicesRequest {
        this['limit'] = limit;
        return this;
    }
}