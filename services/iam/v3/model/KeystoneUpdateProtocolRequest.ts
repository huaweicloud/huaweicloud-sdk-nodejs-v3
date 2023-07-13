import { KeystoneUpdateProtocolRequestBody } from './KeystoneUpdateProtocolRequestBody';


export class KeystoneUpdateProtocolRequest {
    private 'idp_id': string | undefined;
    private 'protocol_id': string | undefined;
    public body?: KeystoneUpdateProtocolRequestBody;
    public constructor(idpId?: any, protocolId?: any) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
    }
    public withIdpId(idpId: string): KeystoneUpdateProtocolRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): KeystoneUpdateProtocolRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId() {
        return this['protocol_id'];
    }
    public withBody(body: KeystoneUpdateProtocolRequestBody): KeystoneUpdateProtocolRequest {
        this['body'] = body;
        return this;
    }
}