import { UpdateOauth2CredentialProviderReqBody } from './UpdateOauth2CredentialProviderReqBody';


export class UpdateOauth2CredentialProviderRequest {
    private 'credential_provider_name'?: string;
    public body?: UpdateOauth2CredentialProviderReqBody;
    public constructor(credentialProviderName?: string) { 
        this['credential_provider_name'] = credentialProviderName;
    }
    public withCredentialProviderName(credentialProviderName: string): UpdateOauth2CredentialProviderRequest {
        this['credential_provider_name'] = credentialProviderName;
        return this;
    }
    public set credentialProviderName(credentialProviderName: string  | undefined) {
        this['credential_provider_name'] = credentialProviderName;
    }
    public get credentialProviderName(): string | undefined {
        return this['credential_provider_name'];
    }
    public withBody(body: UpdateOauth2CredentialProviderReqBody): UpdateOauth2CredentialProviderRequest {
        this['body'] = body;
        return this;
    }
}