import { CentralNetworkErRouteTableAttachment } from './CentralNetworkErRouteTableAttachment';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCentralNetworkErRouteTableAttachmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_er_route_table_attachment'?: CentralNetworkErRouteTableAttachment;
    public constructor(requestId?: string, centralNetworkErRouteTableAttachment?: CentralNetworkErRouteTableAttachment) { 
        super();
        this['request_id'] = requestId;
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public withRequestId(requestId: string): ShowCentralNetworkErRouteTableAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: CentralNetworkErRouteTableAttachment): ShowCentralNetworkErRouteTableAttachmentResponse {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
        return this;
    }
    public set centralNetworkErRouteTableAttachment(centralNetworkErRouteTableAttachment: CentralNetworkErRouteTableAttachment  | undefined) {
        this['central_network_er_route_table_attachment'] = centralNetworkErRouteTableAttachment;
    }
    public get centralNetworkErRouteTableAttachment(): CentralNetworkErRouteTableAttachment | undefined {
        return this['central_network_er_route_table_attachment'];
    }
}