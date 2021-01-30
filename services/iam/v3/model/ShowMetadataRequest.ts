

export class ShowMetadataRequest {
    private 'idp_id': string | undefined;
    private 'protocol_id': string | undefined;
    public constructor(idpId: any, protocolId: any) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
    }
    public withIdpId(idpId: string): ShowMetadataRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): ShowMetadataRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId() {
        return this['protocol_id'];
    }
}