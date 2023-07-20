import { VpcAttachmentCreateRequest } from './VpcAttachmentCreateRequest';


export class CreateVpcAttachmentBody {
    private 'vpc_attachment'?: VpcAttachmentCreateRequest;
    public constructor(vpcAttachment?: VpcAttachmentCreateRequest) { 
        this['vpc_attachment'] = vpcAttachment;
    }
    public withVpcAttachment(vpcAttachment: VpcAttachmentCreateRequest): CreateVpcAttachmentBody {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: VpcAttachmentCreateRequest  | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment(): VpcAttachmentCreateRequest | undefined {
        return this['vpc_attachment'];
    }
}