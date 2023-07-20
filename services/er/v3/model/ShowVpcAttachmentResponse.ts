import { VpcAttachmentDetails } from './VpcAttachmentDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcAttachmentResponse extends SdkResponse {
    private 'vpc_attachment'?: VpcAttachmentDetails;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withVpcAttachment(vpcAttachment: VpcAttachmentDetails): ShowVpcAttachmentResponse {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: VpcAttachmentDetails  | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment(): VpcAttachmentDetails | undefined {
        return this['vpc_attachment'];
    }
    public withRequestId(requestId: string): ShowVpcAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}