

export class DetachBaremetalServerVolumeRequest {
    private 'server_id'?: string;
    private 'attachment_id'?: string;
    public constructor(serverId?: string, attachmentId?: string) { 
        this['server_id'] = serverId;
        this['attachment_id'] = attachmentId;
    }
    public withServerId(serverId: string): DetachBaremetalServerVolumeRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withAttachmentId(attachmentId: string): DetachBaremetalServerVolumeRequest {
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