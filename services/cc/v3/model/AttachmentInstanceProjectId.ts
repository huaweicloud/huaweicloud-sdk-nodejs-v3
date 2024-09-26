

export class AttachmentInstanceProjectId {
    private 'attachment_instance_project_id'?: string;
    public constructor(attachmentInstanceProjectId?: string) { 
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
    }
    public withAttachmentInstanceProjectId(attachmentInstanceProjectId: string): AttachmentInstanceProjectId {
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
        return this;
    }
    public set attachmentInstanceProjectId(attachmentInstanceProjectId: string  | undefined) {
        this['attachment_instance_project_id'] = attachmentInstanceProjectId;
    }
    public get attachmentInstanceProjectId(): string | undefined {
        return this['attachment_instance_project_id'];
    }
}