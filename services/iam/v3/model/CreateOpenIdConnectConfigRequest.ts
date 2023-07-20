import { CreateOpenIdConnectConfigRequestBody } from './CreateOpenIdConnectConfigRequestBody';


export class CreateOpenIdConnectConfigRequest {
    private 'idp_id'?: string;
    public body?: CreateOpenIdConnectConfigRequestBody;
    public constructor(idpId?: string) { 
        this['idp_id'] = idpId;
    }
    public withIdpId(idpId: string): CreateOpenIdConnectConfigRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withBody(body: CreateOpenIdConnectConfigRequestBody): CreateOpenIdConnectConfigRequest {
        this['body'] = body;
        return this;
    }
}