import { CreateMetadataRequestBody } from './CreateMetadataRequestBody';


export class CreateMetadataRequest {
    private 'idp_id'?: string;
    private 'protocol_id'?: string;
    public body?: CreateMetadataRequestBody;
    public constructor(idpId?: string, protocolId?: string) { 
        this['idp_id'] = idpId;
        this['protocol_id'] = protocolId;
    }
    public withIdpId(idpId: string): CreateMetadataRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withProtocolId(protocolId: string): CreateMetadataRequest {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string  | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId(): string | undefined {
        return this['protocol_id'];
    }
    public withBody(body: CreateMetadataRequestBody): CreateMetadataRequest {
        this['body'] = body;
        return this;
    }
}