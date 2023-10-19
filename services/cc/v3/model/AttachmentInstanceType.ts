import { AttachmentInstanceTypeEnum } from './AttachmentInstanceTypeEnum';


export class AttachmentInstanceType {
    private 'attachment_instance_type'?: AttachmentInstanceTypeEnum;
    public constructor(attachmentInstanceType?: AttachmentInstanceTypeEnum) { 
        this['attachment_instance_type'] = attachmentInstanceType;
    }
    public withAttachmentInstanceType(attachmentInstanceType: AttachmentInstanceTypeEnum): AttachmentInstanceType {
        this['attachment_instance_type'] = attachmentInstanceType;
        return this;
    }
    public set attachmentInstanceType(attachmentInstanceType: AttachmentInstanceTypeEnum  | undefined) {
        this['attachment_instance_type'] = attachmentInstanceType;
    }
    public get attachmentInstanceType(): AttachmentInstanceTypeEnum | undefined {
        return this['attachment_instance_type'];
    }
}