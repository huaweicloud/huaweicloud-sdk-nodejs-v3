import { UpdateCentralNetworkGdgwAttachmentRequestBody } from './UpdateCentralNetworkGdgwAttachmentRequestBody';


export class UpdateCentralNetworkGdgwAttachmentRequest {
    private 'central_network_id'?: string;
    private 'gdgw_attachment_id'?: string;
    public body?: UpdateCentralNetworkGdgwAttachmentRequestBody;
    public constructor(centralNetworkId?: string, gdgwAttachmentId?: string) { 
        this['central_network_id'] = centralNetworkId;
        this['gdgw_attachment_id'] = gdgwAttachmentId;
    }
    public withCentralNetworkId(centralNetworkId: string): UpdateCentralNetworkGdgwAttachmentRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withGdgwAttachmentId(gdgwAttachmentId: string): UpdateCentralNetworkGdgwAttachmentRequest {
        this['gdgw_attachment_id'] = gdgwAttachmentId;
        return this;
    }
    public set gdgwAttachmentId(gdgwAttachmentId: string  | undefined) {
        this['gdgw_attachment_id'] = gdgwAttachmentId;
    }
    public get gdgwAttachmentId(): string | undefined {
        return this['gdgw_attachment_id'];
    }
    public withBody(body: UpdateCentralNetworkGdgwAttachmentRequestBody): UpdateCentralNetworkGdgwAttachmentRequest {
        this['body'] = body;
        return this;
    }
}