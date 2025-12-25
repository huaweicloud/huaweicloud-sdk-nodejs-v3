

export class ShowVifPeerDetectionRequest {
    private 'vif_peer_id'?: string;
    public constructor(vifPeerId?: string) { 
        this['vif_peer_id'] = vifPeerId;
    }
    public withVifPeerId(vifPeerId: string): ShowVifPeerDetectionRequest {
        this['vif_peer_id'] = vifPeerId;
        return this;
    }
    public set vifPeerId(vifPeerId: string  | undefined) {
        this['vif_peer_id'] = vifPeerId;
    }
    public get vifPeerId(): string | undefined {
        return this['vif_peer_id'];
    }
}