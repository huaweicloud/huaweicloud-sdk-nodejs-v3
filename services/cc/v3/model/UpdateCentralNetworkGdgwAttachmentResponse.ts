import { CentralNetworkGdgwAttachment } from './CentralNetworkGdgwAttachment';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateCentralNetworkGdgwAttachmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_gdgw_attachment'?: CentralNetworkGdgwAttachment;
    public constructor(requestId?: string, centralNetworkGdgwAttachment?: CentralNetworkGdgwAttachment) { 
        super();
        this['request_id'] = requestId;
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public withRequestId(requestId: string): UpdateCentralNetworkGdgwAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkGdgwAttachment(centralNetworkGdgwAttachment: CentralNetworkGdgwAttachment): UpdateCentralNetworkGdgwAttachmentResponse {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
        return this;
    }
    public set centralNetworkGdgwAttachment(centralNetworkGdgwAttachment: CentralNetworkGdgwAttachment  | undefined) {
        this['central_network_gdgw_attachment'] = centralNetworkGdgwAttachment;
    }
    public get centralNetworkGdgwAttachment(): CentralNetworkGdgwAttachment | undefined {
        return this['central_network_gdgw_attachment'];
    }
}