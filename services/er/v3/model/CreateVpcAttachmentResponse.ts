import { VpcAttachmentDetails } from './VpcAttachmentDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVpcAttachmentResponse extends SdkResponse {
    private 'vpc_attachment'?: VpcAttachmentDetails | undefined;
    private 'request_id'?: string | undefined;
    private 'X-Client-Token'?: string | undefined;
    public constructor() { 
        super();
    }
    public withVpcAttachment(vpcAttachment: VpcAttachmentDetails): CreateVpcAttachmentResponse {
        this['vpc_attachment'] = vpcAttachment;
        return this;
    }
    public set vpcAttachment(vpcAttachment: VpcAttachmentDetails | undefined) {
        this['vpc_attachment'] = vpcAttachment;
    }
    public get vpcAttachment() {
        return this['vpc_attachment'];
    }
    public withRequestId(requestId: string): CreateVpcAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withXClientToken(xClientToken: string): CreateVpcAttachmentResponse {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken() {
        return this['X-Client-Token'];
    }
}