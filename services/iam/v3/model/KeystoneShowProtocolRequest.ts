

export class KeystoneShowProtocolRequest {
    private 'idp_id'?: string;
    private 'protocol_id'?: string;
    public constructor(idpId?: string, protocolId?: string) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
    }
    public withIdpId(idpId: string): KeystoneShowProtocolRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): KeystoneShowProtocolRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string  | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId(): string | undefined {
        return this['protocol_id'];
    }
}