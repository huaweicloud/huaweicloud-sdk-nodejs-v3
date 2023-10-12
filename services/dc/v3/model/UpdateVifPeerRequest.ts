import { UpdateVifPeerRequestBody } from './UpdateVifPeerRequestBody';


export class UpdateVifPeerRequest {
    private 'vif_peer_id'?: string;
    public body?: UpdateVifPeerRequestBody;
    public constructor(vifPeerId?: string) { 
        this['vif_peer_id'] = vifPeerId;
    }
    public withVifPeerId(vifPeerId: string): UpdateVifPeerRequest {
        this['vif_peer_id'] = vifPeerId;
        return this;
    }
    public set vifPeerId(vifPeerId: string  | undefined) {
        this['vif_peer_id'] = vifPeerId;
    }
    public get vifPeerId(): string | undefined {
        return this['vif_peer_id'];
    }
    public withBody(body: UpdateVifPeerRequestBody): UpdateVifPeerRequest {
        this['body'] = body;
        return this;
    }
}