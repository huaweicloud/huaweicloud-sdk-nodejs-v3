import { VifPeer } from './VifPeer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateVifPeerResponse extends SdkResponse {
    private 'vif_peer'?: VifPeer;
    public constructor() { 
        super();
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