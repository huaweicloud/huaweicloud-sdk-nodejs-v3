import { UpdateVpcAttachmentRequestBody } from './UpdateVpcAttachmentRequestBody';


export class UpdateVpcAttachmentRequest {
    private 'er_id': string | undefined;
    private 'vpc_attachment_id': string | undefined;
    public body?: UpdateVpcAttachmentRequestBody;
    public constructor(erId?: any, vpcAttachmentId?: any) { 
        this['er_id'] = erId;
        this['vpc_attachment_id'] = vpcAttachmentId;
    }
    public withErId(erId: string): UpdateVpcAttachmentRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withVpcAttachmentId(vpcAttachmentId: string): UpdateVpcAttachmentRequest {
        this['vpc_attachment_id'] = vpcAttachmentId;
        return this;
    }
    public set vpcAttachmentId(vpcAttachmentId: string | undefined) {
        this['vpc_attachment_id'] = vpcAttachmentId;
    }
    public get vpcAttachmentId() {
        return this['vpc_attachment_id'];
    }
    public withBody(body: UpdateVpcAttachmentRequestBody): UpdateVpcAttachmentRequest {
        this['body'] = body;
        return this;
    }
}