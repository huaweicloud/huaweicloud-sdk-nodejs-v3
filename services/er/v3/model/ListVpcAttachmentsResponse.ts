import { PageInfo } from './PageInfo';
import { VpcAttachmentDetails } from './VpcAttachmentDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVpcAttachmentsResponse extends SdkResponse {
    private 'vpc_attachments'?: Array<VpcAttachmentDetails> | undefined;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withVpcAttachments(vpcAttachments: Array<VpcAttachmentDetails>): ListVpcAttachmentsResponse {
        this['vpc_attachments'] = vpcAttachments;
        return this;
    }
    public set vpcAttachments(vpcAttachments: Array<VpcAttachmentDetails> | undefined) {
        this['vpc_attachments'] = vpcAttachments;
    }
    public get vpcAttachments() {
        return this['vpc_attachments'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVpcAttachmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListVpcAttachmentsResponse {
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