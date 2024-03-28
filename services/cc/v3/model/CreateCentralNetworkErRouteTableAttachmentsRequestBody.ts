import { CreateCentralNetworkErRouteTableAttachment } from './CreateCentralNetworkErRouteTableAttachment';


export class CreateCentralNetworkErRouteTableAttachmentsRequestBody {
    private 'central_network_er_route_table_attachment'?: CreateCentralNetworkErRouteTableAttachment;
    public constructor(centralNetworkErRouteTableAttachment?: CreateCentralNetworkErRouteTableAttachment) { 
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public withCentralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: CreateCentralNetworkErRouteTableAttachment): CreateCentralNetworkErRouteTableAttachmentsRequestBody {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
        return this;
    }
    public set centralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: CreateCentralNetworkErRouteTableAttachment  | undefined) {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public get centralNetworkErRouteTableAttachment(): CreateCentralNetworkErRouteTableAttachment | undefined {
        return this['central_network_er_route_table_attachment'];
    }
}