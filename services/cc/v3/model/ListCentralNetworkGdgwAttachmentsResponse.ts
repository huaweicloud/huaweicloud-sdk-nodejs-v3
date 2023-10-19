import { CentralNetworkGdgwAttachment } from './CentralNetworkGdgwAttachment';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkGdgwAttachmentsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_gdgw_attachments'?: Array<CentralNetworkGdgwAttachment>;
    public constructor(requestId?: string, centralNetworkGdgwAttachments?: Array<CentralNetworkGdgwAttachment>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_gdgw_attachments'] = centralNetworkGdgwAttachments;
    }
    public withRequestId(requestId: string): ListCentralNetworkGdgwAttachmentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkGdgwAttachmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkGdgwAttachments(centralNetworkGdgwAttachments: Array<CentralNetworkGdgwAttachment>): ListCentralNetworkGdgwAttachmentsResponse {
        this['central_network_gdgw_attachments'] = centralNetworkGdgwAttachments;
        return this;
    }
    public set centralNetworkGdgwAttachments(centralNetworkGdgwAttachments: Array<CentralNetworkGdgwAttachment>  | undefined) {
        this['central_network_gdgw_attachments'] = centralNetworkGdgwAttachments;
    }
    public get centralNetworkGdgwAttachments(): Array<CentralNetworkGdgwAttachment> | undefined {
        return this['central_network_gdgw_attachments'];
    }
}