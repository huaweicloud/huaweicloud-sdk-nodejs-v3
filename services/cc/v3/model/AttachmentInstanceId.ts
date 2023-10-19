

export class AttachmentInstanceId {
    private 'attachment_instance_id'?: string;
    public constructor(attachmentInstanceId?: string) { 
        this['attachment_instance_id'] = attachmentInstanceId;
    }
    public withAttachmentInstanceId(attachmentInstanceId: string): AttachmentInstanceId {
        this['attachment_instance_id'] = attachmentInstanceId;
        return this;
    }
    public set attachmentInstanceId(attachmentInstanceId: string  | undefined) {
        this['attachment_instance_id'] = attachmentInstanceId;
    }
    public get attachmentInstanceId(): string | undefined {
        return this['attachment_instance_id'];
    }
}