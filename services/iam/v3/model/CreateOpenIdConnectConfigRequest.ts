import { CreateOpenIdConnectConfigRequestBody } from './CreateOpenIdConnectConfigRequestBody';


export class CreateOpenIdConnectConfigRequest {
    private 'idp_id': string | undefined;
    public body?: CreateOpenIdConnectConfigRequestBody;
    public constructor(idpId?: any) { 
        this['idp_id'] = idpId;
    }
    public withIdpId(idpId: string): CreateOpenIdConnectConfigRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId() {
        return this['idp_id'];
    }
    public withBody(body: CreateOpenIdConnectConfigRequestBody): CreateOpenIdConnectConfigRequest {
        this['body'] = body;
        return this;
    }
}