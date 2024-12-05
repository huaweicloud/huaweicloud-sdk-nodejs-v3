

export class DeletePeerLinkRequest {
    private 'global_dc_gateway_id'?: string;
    private 'peer_link_id'?: string;
    public constructor(globalDcGatewayId?: string, peerLinkId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
        this['peer_link_id'] = peerLinkId;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): DeletePeerLinkRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withPeerLinkId(peerLinkId: string): DeletePeerLinkRequest {
        this['peer_link_id'] = peerLinkId;
        return this;
    }
    public set peerLinkId(peerLinkId: string  | undefined) {
        this['peer_link_id'] = peerLinkId;
    }
    public get peerLinkId(): string | undefined {
        return this['peer_link_id'];
    }
}