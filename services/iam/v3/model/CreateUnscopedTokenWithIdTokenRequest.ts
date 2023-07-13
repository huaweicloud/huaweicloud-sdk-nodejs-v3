

export class CreateUnscopedTokenWithIdTokenRequest {
    private 'idp_id': string | undefined;
    private 'protocol_id': string | undefined;
    private 'Authorization': string | undefined;
    public constructor(idpId?: any, protocolId?: any, authorization?: any) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
        this['Authorization'] = authorization;
    }
    public withIdpId(idpId: string): CreateUnscopedTokenWithIdTokenRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): CreateUnscopedTokenWithIdTokenRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId() {
        return this['protocol_id'];
    }
    public withAuthorization(authorization: string): CreateUnscopedTokenWithIdTokenRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization() {
        return this['Authorization'];
    }
}