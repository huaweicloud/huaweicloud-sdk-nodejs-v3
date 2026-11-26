import { CreateApiKeyCredentialProviderReqBody } from './CreateApiKeyCredentialProviderReqBody';


export class CreateApiKeyCredentialProviderRequest {
    public body?: CreateApiKeyCredentialProviderReqBody;
    public constructor() { 
    }
    public withBody(body: CreateApiKeyCredentialProviderReqBody): CreateApiKeyCredentialProviderRequest {
        this['body'] = body;
        return this;
    }
}