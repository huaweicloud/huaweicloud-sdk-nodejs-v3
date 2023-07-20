

export class KeystoneListProtocolsRequest {
    private 'idp_id'?: string;
    public constructor(idpId?: string) { 
        this['idp_id'] = idpId;
    }
    public withIdpId(idpId: string): KeystoneListProtocolsRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
}