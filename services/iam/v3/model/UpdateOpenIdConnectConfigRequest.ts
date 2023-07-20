import { UpdateOpenIdConnectConfigRequestBody } from './UpdateOpenIdConnectConfigRequestBody';


export class UpdateOpenIdConnectConfigRequest {
    private 'idp_id'?: string;
    public body?: UpdateOpenIdConnectConfigRequestBody;
    public constructor(idpId?: string) { 
        this['idp_id'] = idpId;
    }
    public withIdpId(idpId: string): UpdateOpenIdConnectConfigRequest {
        this['idp_id'] = idpId;
        return this;
    }
    public set idpId(idpId: string  | undefined) {
        this['idp_id'] = idpId;
    }
    public get idpId(): string | undefined {
        return this['idp_id'];
    }
    public withBody(body: UpdateOpenIdConnectConfigRequestBody): UpdateOpenIdConnectConfigRequest {
        this['body'] = body;
        return this;
    }
}