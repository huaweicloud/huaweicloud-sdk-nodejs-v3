import { CentralNetworkErRouteTableAttachment } from './CentralNetworkErRouteTableAttachment';
import { ListResponseBody } from './ListResponseBody';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkErRouteTableAttachmentsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'central_network_er_route_table_attachments'?: Array<CentralNetworkErRouteTableAttachment>;
    public constructor(requestId?: string, centralNetworkErRouteTableAttachments?: Array<CentralNetworkErRouteTableAttachment>) { 
        super();
        this['request_id'] = requestId;
        this['central_network_er_route_table_attachments'] = centralNetworkErRouteTableAttachments;
    }
    public withRequestId(requestId: string): ListCentralNetworkErRouteTableAttachmentsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCentralNetworkErRouteTableAttachmentsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCentralNetworkErRouteTableAttachments(centralNetworkErRouteTableAttachments: Array<CentralNetworkErRouteTableAttachment>): ListCentralNetworkErRouteTableAttachmentsResponse {
        this['central_network_er_route_table_attachments'] = centralNetworkErRouteTableAttachments;
        return this;
    }
    public set centralNetworkErRouteTableAttachments(centralNetworkErRouteTableAttachments: Array<CentralNetworkErRouteTableAttachment>  | undefined) {
        this['central_network_er_route_table_attachments'] = centralNetworkErRouteTableAttachments;
    }
    public get centralNetworkErRouteTableAttachments(): Array<CentralNetworkErRouteTableAttachment> | undefined {
        return this['central_network_er_route_table_attachments'];
    }
}