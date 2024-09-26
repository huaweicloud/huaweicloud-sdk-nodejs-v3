

export class AttachmentId {
    private 'attachment_id'?: string;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: string): AttachmentId {
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