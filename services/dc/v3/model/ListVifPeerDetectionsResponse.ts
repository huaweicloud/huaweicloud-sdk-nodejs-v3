import { VifPeerDetection } from './VifPeerDetection';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVifPeerDetectionsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'vif_peer_detections'?: Array<VifPeerDetection>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListVifPeerDetectionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVifPeerDetections(vifPeerDetections: Array<VifPeerDetection>): ListVifPeerDetectionsResponse {
        this['vif_peer_detections'] = vifPeerDetections;
        return this;
    }
    public set vifPeerDetections(vifPeerDetections: Array<VifPeerDetection>  | undefined) {
        this['vif_peer_detections'] = vifPeerDetections;
    }
    public get vifPeerDetections(): Array<VifPeerDetection> | undefined {
        return this['vif_peer_detections'];
    }
}