

export class Attachment {
    private 'attached_at': string | undefined;
    private 'attachment_id': string | undefined;
    public device: string;
    private 'host_name': string | undefined;
    public id: string;
    private 'server_id': string | undefined;
    private 'volume_id': string | undefined;
    public constructor(attachedAt?: any, attachmentId?: any, device?: any, hostName?: any, id?: any, serverId?: any, volumeId?: any) { 
        this['attached_at'] = attachedAt;
        this['attachment_id'] = attachmentId;
        this['device'] = device;
        this['host_name'] = hostName;
        this['id'] = id;
        this['server_id'] = serverId;
        this['volume_id'] = volumeId;
    }
    public withAttachedAt(attachedAt: string): Attachment {
        this['attached_at'] = attachedAt;
        return this;
    }
    public set attachedAt(attachedAt: string | undefined) {
        this['attached_at'] = attachedAt;
    }
    public get attachedAt() {
        return this['attached_at'];
    }
    public withAttachmentId(attachmentId: string): Attachment {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withDevice(device: string): Attachment {
        this['device'] = device;
        return this;
    }
    public withHostName(hostName: string): Attachment {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withId(id: string): Attachment {
        this['id'] = id;
        return this;
    }
    public withServerId(serverId: string): Attachment {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId() {
        return this['server_id'];
    }
    public withVolumeId(volumeId: string): Attachment {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
}