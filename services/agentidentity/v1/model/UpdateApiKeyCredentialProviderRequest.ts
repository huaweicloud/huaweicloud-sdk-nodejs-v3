import { UpdateApiKeyCredentialProviderReqBody } from './UpdateApiKeyCredentialProviderReqBody';


export class UpdateApiKeyCredentialProviderRequest {
    private 'credential_provider_name'?: string;
    public body?: UpdateApiKeyCredentialProviderReqBody;
    public constructor(credentialProviderName?: string) { 
        this['credential_provider_name'] = credentialProviderName;
    }
    public withCredentialProviderName(credentialProviderName: string): UpdateApiKeyCredentialProviderRequest {
        this['credential_provider_name'] = credentialProviderName;
        return this;
    }
    public set credentialProviderName(credentialProviderName: string  | undefined) {
        this['credential_provider_name'] = credentialProviderName;
    }
    public get credentialProviderName(): string | undefined {
        return this['credential_provider_name'];
    }
    public withBody(body: UpdateApiKeyCredentialProviderReqBody): UpdateApiKeyCredentialProviderRequest {
        this['body'] = body;
        return this;
    }
}