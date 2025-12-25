import { VifPeerDetection } from './VifPeerDetection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVifPeerDetectionResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'vif_peer_detection'?: VifPeerDetection;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateVifPeerDetectionResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVifPeerDetection(vifPeerDetection: VifPeerDetection): CreateVifPeerDetectionResponse {
        this['vif_peer_detection'] = vifPeerDetection;
        return this;
    }
    public set vifPeerDetection(vifPeerDetection: VifPeerDetection  | undefined) {
        this['vif_peer_detection'] = vifPeerDetection;
    }
    public get vifPeerDetection(): VifPeerDetection | undefined {
        return this['vif_peer_detection'];
    }
}