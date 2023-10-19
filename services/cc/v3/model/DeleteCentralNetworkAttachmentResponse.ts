import { CentralNetworkAttachment } from './CentralNetworkAttachment';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCentralNetworkAttachmentResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'central_network_attachment'?: CentralNetworkAttachment;
    public constructor(requestId?: string, centralNetworkAttachment?: CentralNetworkAttachment) { 
        super();
        this['request_id'] = requestId;
        this['central_network_attachment'] = centralNetworkAttachment;
    }
    public withRequestId(requestId: string): DeleteCentralNetworkAttachmentResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCentralNetworkAttachment(centralNetworkAttachment: CentralNetworkAttachment): DeleteCentralNetworkAttachmentResponse {
        this['central_network_attachment'] = centralNetworkAttachment;
        return this;
    }
    public set centralNetworkAttachment(centralNetworkAttachment: CentralNetworkAttachment  | undefined) {
        this['central_network_attachment'] = centralNetworkAttachment;
    }
    public get centralNetworkAttachment(): CentralNetworkAttachment | undefined {
        return this['central_network_attachment'];
    }
}