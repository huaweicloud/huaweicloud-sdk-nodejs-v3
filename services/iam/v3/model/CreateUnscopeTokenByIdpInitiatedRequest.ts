import { CreateUnscopeTokenByIdpInitiatedRequestBody } from './CreateUnscopeTokenByIdpInitiatedRequestBody';


export class CreateUnscopeTokenByIdpInitiatedRequest {
    private 'X-Idp-Id'?: string;
    public body?: CreateUnscopeTokenByIdpInitiatedRequestBody;
    public constructor(xIdpId?: string) { 
        this['X-Idp-Id'] = xIdpId;
    }
    public withXIdpId(xIdpId: string): CreateUnscopeTokenByIdpInitiatedRequest {
        this['X-Idp-Id'] = xIdpId;
        return this;
    }
    public set xIdpId(xIdpId: string  | undefined) {
        this['X-Idp-Id'] = xIdpId;
    }
    public get xIdpId(): string | undefined {
        return this['X-Idp-Id'];
    }
    public withBody(body: CreateUnscopeTokenByIdpInitiatedRequestBody): CreateUnscopeTokenByIdpInitiatedRequest {
        this['body'] = body;
        return this;
    }
}