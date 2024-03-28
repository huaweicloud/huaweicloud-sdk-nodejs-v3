import { UpdateCentralNetworkErRouteTableAttachmentRequestBody } from './UpdateCentralNetworkErRouteTableAttachmentRequestBody';


export class UpdateCentralNetworkErRouteTableAttachmentRequest {
    private 'central_network_id'?: string;
    private 'er_route_table_attachment_id'?: string;
    public body?: UpdateCentralNetworkErRouteTableAttachmentRequestBody;
    public constructor(centralNetworkId?: string, erRouteTableAttachmentId?: string) { 
        this['central_network_id'] = centralNetworkId;
        this['er_route_table_attachment_id'] = erRouteTableAttachmentId;
    }
    public withCentralNetworkId(centralNetworkId: string): UpdateCentralNetworkErRouteTableAttachmentRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withErRouteTableAttachmentId(erRouteTableAttachmentId: string): UpdateCentralNetworkErRouteTableAttachmentRequest {
        this['er_route_table_attachment_id'] = erRouteTableAttachmentId;
        return this;
    }
    public set erRouteTableAttachmentId(erRouteTableAttachmentId: string  | undefined) {
        this['er_route_table_attachment_id'] = erRouteTableAttachmentId;
    }
    public get erRouteTableAttachmentId(): string | undefined {
        return this['er_route_table_attachment_id'];
    }
    public withBody(body: UpdateCentralNetworkErRouteTableAttachmentRequestBody): UpdateCentralNetworkErRouteTableAttachmentRequest {
        this['body'] = body;
        return this;
    }
}