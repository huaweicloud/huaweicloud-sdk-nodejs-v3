

export class RejectAttachmentRequest {
    private 'er_id'?: string;
    private 'attachment_id'?: string;
    public constructor(erId?: string, attachmentId?: string) { 
        this['er_id'] = erId;
        this['attachment_id'] = attachmentId;
    }
    public withErId(erId: string): RejectAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withAttachmentId(attachmentId: string): RejectAttachmentRequest {
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