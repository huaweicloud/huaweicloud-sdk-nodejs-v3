import { PageInfo } from './PageInfo';
import { PolicyEngineAttachmentSummary } from './PolicyEngineAttachmentSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyEngineAttachmentsResponse extends SdkResponse {
    public attachments?: Array<PolicyEngineAttachmentSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAttachments(attachments: Array<PolicyEngineAttachmentSummary>): ListPolicyEngineAttachmentsResponse {
        this['attachments'] = attachments;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListPolicyEngineAttachmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}