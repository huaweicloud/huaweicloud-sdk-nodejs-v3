import { CreateStsCredentialProviderReqBody } from './CreateStsCredentialProviderReqBody';


export class CreateStsCredentialProviderRequest {
    public body?: CreateStsCredentialProviderReqBody;
    public constructor() { 
    }
    public withBody(body: CreateStsCredentialProviderReqBody): CreateStsCredentialProviderRequest {
        this['body'] = body;
        return this;
    }
}