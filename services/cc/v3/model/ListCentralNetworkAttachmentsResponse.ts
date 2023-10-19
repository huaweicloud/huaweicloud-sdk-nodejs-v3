import { CentralNetworkAttachment } from './CentralNetworkAttachment';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkAttachmentsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_attachments'?: Array<CentralNetworkAttachment>;
    public constructor(requestId?: string, centralNetworkAttachments?: Array<CentralNetworkAttachment>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_attachments'] = centralNetworkAttachments;
    }
    public withRequestId(requestId: string): ListCentralNetworkAttachmentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkAttachmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkAttachments(centralNetworkAttachments: Array<CentralNetworkAttachment>): ListCentralNetworkAttachmentsResponse {
        this['central_network_attachments'] = centralNetworkAttachments;
        return this;
    }
    public set centralNetworkAttachments(centralNetworkAttachments: Array<CentralNetworkAttachment>  | undefined) {
        this['central_network_attachments'] = centralNetworkAttachments;
    }
    public get centralNetworkAttachments(): Array<CentralNetworkAttachment> | undefined {
        return this['central_network_attachments'];
    }
}