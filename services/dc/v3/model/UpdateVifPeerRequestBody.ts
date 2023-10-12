import { UpdateVifPeer } from './UpdateVifPeer';


export class UpdateVifPeerRequestBody {
    private 'vif_peer'?: UpdateVifPeer;
    public constructor() { 
    }
    public withVifPeer(vifPeer: UpdateVifPeer): UpdateVifPeerRequestBody {
        this['vif_peer'] = vifPeer;
        return this;
    }
    public set vifPeer(vifPeer: UpdateVifPeer  | undefined) {
        this['vif_peer'] = vifPeer;
    }
    public get vifPeer(): UpdateVifPeer | undefined {
        return this['vif_peer'];
    }
}