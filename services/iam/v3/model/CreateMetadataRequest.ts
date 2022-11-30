import { CreateMetadataRequestBody } from './CreateMetadataRequestBody';


export class CreateMetadataRequest {
    private 'idp_id': string | undefined;
    private 'protocol_id': string | undefined;
    public body?: CreateMetadataRequestBody;
    public constructor(idpId?: any, protocolId?: any) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
    }
    public withIdpId(idpId: string): CreateMetadataRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): CreateMetadataRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId() {
        return this['protocol_id'];
    }
    public withBody(body: CreateMetadataRequestBody): CreateMetadataRequest {
        this['body'] = body;
        return this;
    }
}