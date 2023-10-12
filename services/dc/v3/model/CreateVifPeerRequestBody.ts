import { CreateVifPeer } from './CreateVifPeer';


export class CreateVifPeerRequestBody {
    private 'vif_peer'?: CreateVifPeer;
    public constructor() { 
    }
    public withVifPeer(vifPeer: CreateVifPeer): CreateVifPeerRequestBody {
        this['vif_peer'] = vifPeer;
        return this;
    }
    public set vifPeer(vifPeer: CreateVifPeer  | undefined) {
        this['vif_peer'] = vifPeer;
    }
    public get vifPeer(): CreateVifPeer | undefined {
        return this['vif_peer'];
    }
}