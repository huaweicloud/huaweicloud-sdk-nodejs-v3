

export class AttachedEnterpriseRouterAttachmentId {
    private 'attached_er_attachment_id'?: string;
    public constructor() { 
    }
    public withAttachedErAttachmentId(attachedErAttachmentId: string): AttachedEnterpriseRouterAttachmentId {
        this['attached_er_attachment_id'] = attachedErAttachmentId;
        return this;
    }
    public set attachedErAttachmentId(attachedErAttachmentId: string  | undefined) {
        this['attached_er_attachment_id'] = attachedErAttachmentId;
    }
    public get attachedErAttachmentId(): string | undefined {
        return this['attached_er_attachment_id'];
    }
}