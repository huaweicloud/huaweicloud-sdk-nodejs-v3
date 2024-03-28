import { UpdateCentralNetworkErRouteTableAttachment } from './UpdateCentralNetworkErRouteTableAttachment';


export class UpdateCentralNetworkErRouteTableAttachmentRequestBody {
    private 'central_network_er_route_table_attachment'?: UpdateCentralNetworkErRouteTableAttachment;
    public constructor(centralNetworkErRouteTableAttachment?: UpdateCentralNetworkErRouteTableAttachment) { 
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public withCentralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: UpdateCentralNetworkErRouteTableAttachment): UpdateCentralNetworkErRouteTableAttachmentRequestBody {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
        return this;
    }
    public set centralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: UpdateCentralNetworkErRouteTableAttachment  | undefined) {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public get centralNetworkErRouteTableAttachment(): UpdateCentralNetworkErRouteTableAttachment | undefined {
        return this['central_network_er_route_table_attachment'];
    }
}