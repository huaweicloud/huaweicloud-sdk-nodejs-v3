

export class DeleteOauth2CredentialProviderRequest {
    private 'credential_provider_name'?: string;
    public constructor(credentialProviderName?: string) { 
        this['credential_provider_name'] = credentialProviderName;
    }
    public withCredentialProviderName(credentialProviderName: string): DeleteOauth2CredentialProviderRequest {
        this['credential_provider_name'] = credentialProviderName;
        return this;
    }
    public set credentialProviderName(credentialProviderName: string  | undefined) {
        this['credential_provider_name'] = credentialProviderName;
    }
    public get credentialProviderName(): string | undefined {
        return this['credential_provider_name'];
    }
}