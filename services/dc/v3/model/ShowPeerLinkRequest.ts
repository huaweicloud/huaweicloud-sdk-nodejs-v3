

export class ShowPeerLinkRequest {
    private 'global_dc_gateway_id'?: string;
    private 'peer_link_id'?: string;
    public fields?: Array<string>;
    private 'ext_fields'?: Array<string>;
    public constructor(globalDcGatewayId?: string, peerLinkId?: string) { 
        this['global_dc_gateway_id'] = globalDcGatewayId;
        this['peer_link_id'] = peerLinkId;
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): ShowPeerLinkRequest {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withPeerLinkId(peerLinkId: string): ShowPeerLinkRequest {
        this['peer_link_id'] = peerLinkId;
        return this;
    }
    public set peerLinkId(peerLinkId: string  | undefined) {
        this['peer_link_id'] = peerLinkId;
    }
    public get peerLinkId(): string | undefined {
        return this['peer_link_id'];
    }
    public withFields(fields: Array<string>): ShowPeerLinkRequest {
        this['fields'] = fields;
        return this;
    }
    public withExtFields(extFields: Array<string>): ShowPeerLinkRequest {
        this['ext_fields'] = extFields;
        return this;
    }
    public set extFields(extFields: Array<string>  | undefined) {
        this['ext_fields'] = extFields;
    }
    public get extFields(): Array<string> | undefined {
        return this['ext_fields'];
    }
}