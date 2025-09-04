import { UpdateDesireds } from './UpdateDesireds';


export class UpdateDeviceRequest {
    private 'edge_node_id'?: string;
    private 'device_id'?: string;
    public body?: UpdateDesireds;
    public constructor(edgeNodeId?: string, deviceId?: string) { 
        this['edge_node_id'] = edgeNodeId;
        this['device_id'] = deviceId;
    }
    public withEdgeNodeId(edgeNodeId: string): UpdateDeviceRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withDeviceId(deviceId: string): UpdateDeviceRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withBody(body: UpdateDesireds): UpdateDeviceRequest {
        this['body'] = body;
        return this;
    }
}