

export class AttachmentInstanceRegionId {
    private 'attachment_instance_region_id'?: string;
    public constructor(attachmentInstanceRegionId?: string) { 
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
    }
    public withAttachmentInstanceRegionId(attachmentInstanceRegionId: string): AttachmentInstanceRegionId {
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
        return this;
    }
    public set attachmentInstanceRegionId(attachmentInstanceRegionId: string  | undefined) {
        this['attachment_instance_region_id'] = attachmentInstanceRegionId;
    }
    public get attachmentInstanceRegionId(): string | undefined {
        return this['attachment_instance_region_id'];
    }
}