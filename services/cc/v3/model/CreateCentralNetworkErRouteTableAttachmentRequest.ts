import { CreateCentralNetworkErRouteTableAttachmentsRequestBody } from './CreateCentralNetworkErRouteTableAttachmentsRequestBody';


export class CreateCentralNetworkErRouteTableAttachmentRequest {
    private 'central_network_id'?: string;
    public body?: CreateCentralNetworkErRouteTableAttachmentsRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): CreateCentralNetworkErRouteTableAttachmentRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: CreateCentralNetworkErRouteTableAttachmentsRequestBody): CreateCentralNetworkErRouteTableAttachmentRequest {
        this['body'] = body;
        return this;
    }
}