

export class GetResourceApiKeyRequestBody {
    private 'resource_credential_provider_name'?: string;
    private 'workload_access_token'?: string;
    public constructor(resourceCredentialProviderName?: string) { 
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
    }
    public withResourceCredentialProviderName(resourceCredentialProviderName: string): GetResourceApiKeyRequestBody {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
        return this;
    }
    public set resourceCredentialProviderName(resourceCredentialProviderName: string  | undefined) {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
    }
    public get resourceCredentialProviderName(): string | undefined {
        return this['resource_credential_provider_name'];
    }
    public withWorkloadAccessToken(workloadAccessToken: string): GetResourceApiKeyRequestBody {
        this['workload_access_token'] = workloadAccessToken;
        return this;
    }
    public set workloadAccessToken(workloadAccessToken: string  | undefined) {
        this['workload_access_token'] = workloadAccessToken;
    }
    public get workloadAccessToken(): string | undefined {
        return this['workload_access_token'];
    }
}