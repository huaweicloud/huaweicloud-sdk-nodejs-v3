

export class DeleteCentralNetworkAttachmentRequest {
    private 'central_network_id'?: string;
    private 'attachment_id'?: string;
    public constructor(centralNetworkId?: string, attachmentId?: string) { 
        this['central_network_id'] = centralNetworkId;
        this['attachment_id'] = attachmentId;
    }
    public withCentralNetworkId(centralNetworkId: string): DeleteCentralNetworkAttachmentRequest {
        this['central_network_id'] = centralNetworkId;
        return this;
    }
    public set centralNetworkId(centralNetworkId: string  | undefined) {
        this['central_network_id'] = centralNetworkId;
    }
    public get centralNetworkId(): string | undefined {
        return this['central_network_id'];
    }
    public withAttachmentId(attachmentId: string): DeleteCentralNetworkAttachmentRequest {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
}