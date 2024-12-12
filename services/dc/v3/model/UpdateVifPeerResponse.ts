import { VifPeer } from './VifPeer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVifPeerResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'vif_peer'?: VifPeer;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateVifPeerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withVifPeer(vifPeer: VifPeer): UpdateVifPeerResponse {
        this['vif_peer'] = vifPeer;
        return this;
    }
    public set vifPeer(vifPeer: VifPeer  | undefined) {
        this['vif_peer'] = vifPeer;
    }
    public get vifPeer(): VifPeer | undefined {
        return this['vif_peer'];
    }
}