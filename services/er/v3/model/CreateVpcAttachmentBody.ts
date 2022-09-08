import { VpcAttachmentCreateRequest } from './VpcAttachmentCreateRequest';


export class CreateVpcAttachmentBody {
    private 'vpc_attachment': VpcAttachmentCreateRequest | undefined;
    public constructor(vpcAttachment?: any) { 
        this['vpc_attachment'] = vpcAttachment;
    }
    public withVpcAttachment(vpcAttachment: VpcAttachmentCreateRequest): CreateVpcAttachmentBody {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: VpcAttachmentCreateRequest | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment() {
        return this['vpc_attachment'];
    }
}