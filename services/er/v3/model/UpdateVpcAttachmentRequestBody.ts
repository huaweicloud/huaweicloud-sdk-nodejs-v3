import { UpdateVpcAttachmentBody } from './UpdateVpcAttachmentBody';


export class UpdateVpcAttachmentRequestBody {
    private 'vpc_attachment'?: UpdateVpcAttachmentBody | undefined;
    public constructor() { 
    }
    public withVpcAttachment(vpcAttachment: UpdateVpcAttachmentBody): UpdateVpcAttachmentRequestBody {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: UpdateVpcAttachmentBody | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment() {
        return this['vpc_attachment'];
    }
}