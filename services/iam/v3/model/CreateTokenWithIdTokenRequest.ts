import { GetIdTokenRequestBody } from './GetIdTokenRequestBody';


export class CreateTokenWithIdTokenRequest {
    private 'X-Idp-Id'?: string;
    public body?: GetIdTokenRequestBody;
    public constructor(xIdpId?: string) { 
        this['X-Idp-Id'] = xIdpId;
    }
    public withXIdpId(xIdpId: string): CreateTokenWithIdTokenRequest {
        this['X-Idp-Id'] = xIdpId;
        return this;
    }
    public set xIdpId(xIdpId: string  | undefined) {
        this['X-Idp-Id'] = xIdpId;
    }
    public get xIdpId(): string | undefined {
        return this['X-Idp-Id'];
    }
    public withBody(body: GetIdTokenRequestBody): CreateTokenWithIdTokenRequest {
        this['body'] = body;
        return this;
    }
}