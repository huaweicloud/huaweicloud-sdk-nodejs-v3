import { CreateCentralNetworkGdgwAttachmentRequestBody } from './CreateCentralNetworkGdgwAttachmentRequestBody';


export class CreateCentralNetworkGdgwAttachmentRequest {
    private 'central_network_id'?: string;
    public body?: CreateCentralNetworkGdgwAttachmentRequestBody;
    public constructor(centralNetworkId?: string) { 
        this['central_network_id'] = centralNetworkId;
    }
    public withCentralNetworkId(centralNetworkId: string): CreateCentralNetworkGdgwAttachmentRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withBody(body: CreateCentralNetworkGdgwAttachmentRequestBody): CreateCentralNetworkGdgwAttachmentRequest {
        this['body'] = body;
        return this;
    }
}