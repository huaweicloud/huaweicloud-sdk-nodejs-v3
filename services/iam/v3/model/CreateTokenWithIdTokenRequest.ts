import { GetIdTokenRequestBody } from './GetIdTokenRequestBody';


export class CreateTokenWithIdTokenRequest {
    private 'X-Idp-Id': string | undefined;
    public body?: GetIdTokenRequestBody;
    public constructor(xIdpId?: any) { 
        this['X-Idp-Id'] = xIdpId;
    }
    public withXIdpId(xIdpId: string): CreateTokenWithIdTokenRequest {
        this['X-Idp-Id'] = xIdpId;
        return this;
    }
    public set xIdpId(xIdpId: string | undefined) {
        this['X-Idp-Id'] = xIdpId;
    }
    public get xIdpId() {
        return this['X-Idp-Id'];
    }
    public withBody(body: GetIdTokenRequestBody): CreateTokenWithIdTokenRequest {
        this['body'] = body;
        return this;
    }
}