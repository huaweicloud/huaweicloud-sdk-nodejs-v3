import { AddDeviceRequestBody } from './AddDeviceRequestBody';


export class AddDeviceRequest {
    private 'edge_node_id'?: string;
    public body?: AddDeviceRequestBody;
    public constructor(edgeNodeId?: string) { 
        this['edge_node_id'] = edgeNodeId;
    }
    public withEdgeNodeId(edgeNodeId: string): AddDeviceRequest {
        this['edge_node_id'] = edgeNodeId;
        return this;
    }
    public set edgeNodeId(edgeNodeId: string  | undefined) {
        this['edge_node_id'] = edgeNodeId;
    }
    public get edgeNodeId(): string | undefined {
        return this['edge_node_id'];
    }
    public withBody(body: AddDeviceRequestBody): AddDeviceRequest {
        this['body'] = body;
        return this;
    }
}