

export class AttachmentParentInstanceId {
    private 'attachment_parent_instance_id'?: string;
    public constructor() { 
    }
    public withAttachmentParentInstanceId(attachmentParentInstanceId: string): AttachmentParentInstanceId {
        this['attachment_parent_instance_id'] = attachmentParentInstanceId;
        return this;
    }
    public set attachmentParentInstanceId(attachmentParentInstanceId: string  | undefined) {
        this['attachment_parent_instance_id'] = attachmentParentInstanceId;
    }
    public get attachmentParentInstanceId(): string | undefined {
        return this['attachment_parent_instance_id'];
    }
}