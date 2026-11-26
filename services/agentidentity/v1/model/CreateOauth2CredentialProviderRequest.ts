import { CreateOauth2CredentialProviderReqBody } from './CreateOauth2CredentialProviderReqBody';


export class CreateOauth2CredentialProviderRequest {
    public body?: CreateOauth2CredentialProviderReqBody;
    public constructor() { 
    }
    public withBody(body: CreateOauth2CredentialProviderReqBody): CreateOauth2CredentialProviderRequest {
        this['body'] = body;
        return this;
    }
}