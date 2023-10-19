

export class GlobalDcGatewayPeerLinkId {
    private 'global_dc_gateway_peer_link_id'?: string;
    public constructor() { 
    }
    public withGlobalDcGatewayPeerLinkId(globalDcGatewayPeerLinkId: string): GlobalDcGatewayPeerLinkId {
        this['global_dc_gateway_peer_link_id'] = globalDcGatewayPeerLinkId;
        return this;
    }
    public set globalDcGatewayPeerLinkId(globalDcGatewayPeerLinkId: string  | undefined) {
        this['global_dc_gateway_peer_link_id'] = globalDcGatewayPeerLinkId;
    }
    public get globalDcGatewayPeerLinkId(): string | undefined {
        return this['global_dc_gateway_peer_link_id'];
    }
}