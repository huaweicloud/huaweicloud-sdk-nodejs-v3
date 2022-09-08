import { VpcAttachmentDetails } from './VpcAttachmentDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVpcAttachmentResponse extends SdkResponse {
    private 'vpc_attachment'?: VpcAttachmentDetails | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withVpcAttachment(vpcAttachment: VpcAttachmentDetails): UpdateVpcAttachmentResponse {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: VpcAttachmentDetails | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment() {
        return this['vpc_attachment'];
    }
    public withRequestId(requestId: string): UpdateVpcAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}