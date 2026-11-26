

export class GetResourceOauth2TokenRequestBody {
    private 'custom_parameters'?: { [key: string]: string; };
    private 'custom_state'?: string;
    private 'force_authentication'?: boolean;
    private 'oauth2_flow'?: GetResourceOauth2TokenRequestBodyOauth2FlowEnum | string;
    private 'resource_credential_provider_name'?: string;
    private 'resource_oauth2_return_url'?: string;
    public scopes?: Array<string>;
    private 'session_uri'?: string;
    private 'workload_access_token'?: string;
    public constructor(oauth2Flow?: string, resourceCredentialProviderName?: string) { 
        this['oauth2_flow'] = oauth2Flow;
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
    }
    public withCustomParameters(customParameters: { [key: string]: string; }): GetResourceOauth2TokenRequestBody {
        this['custom_parameters'] = customParameters;
        return this;
    }
    public set customParameters(customParameters: { [key: string]: string; }  | undefined) {
        this['custom_parameters'] = customParameters;
    }
    public get customParameters(): { [key: string]: string; } | undefined {
        return this['custom_parameters'];
    }
    public withCustomState(customState: string): GetResourceOauth2TokenRequestBody {
        this['custom_state'] = customState;
        return this;
    }
    public set customState(customState: string  | undefined) {
        this['custom_state'] = customState;
    }
    public get customState(): string | undefined {
        return this['custom_state'];
    }
    public withForceAuthentication(forceAuthentication: boolean): GetResourceOauth2TokenRequestBody {
        this['force_authentication'] = forceAuthentication;
        return this;
    }
    public set forceAuthentication(forceAuthentication: boolean  | undefined) {
        this['force_authentication'] = forceAuthentication;
    }
    public get forceAuthentication(): boolean | undefined {
        return this['force_authentication'];
    }
    public withOauth2Flow(oauth2Flow: GetResourceOauth2TokenRequestBodyOauth2FlowEnum | string): GetResourceOauth2TokenRequestBody {
        this['oauth2_flow'] = oauth2Flow;
        return this;
    }
    public set oauth2Flow(oauth2Flow: GetResourceOauth2TokenRequestBodyOauth2FlowEnum | string  | undefined) {
        this['oauth2_flow'] = oauth2Flow;
    }
    public get oauth2Flow(): GetResourceOauth2TokenRequestBodyOauth2FlowEnum | string | undefined {
        return this['oauth2_flow'];
    }
    public withResourceCredentialProviderName(resourceCredentialProviderName: string): GetResourceOauth2TokenRequestBody {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
        return this;
    }
    public set resourceCredentialProviderName(resourceCredentialProviderName: string  | undefined) {
        this['resource_credential_provider_name'] = resourceCredentialProviderName;
    }
    public get resourceCredentialProviderName(): string | undefined {
        return this['resource_credential_provider_name'];
    }
    public withResourceOauth2ReturnUrl(resourceOauth2ReturnUrl: string): GetResourceOauth2TokenRequestBody {
        this['resource_oauth2_return_url'] = resourceOauth2ReturnUrl;
        return this;
    }
    public set resourceOauth2ReturnUrl(resourceOauth2ReturnUrl: string  | undefined) {
        this['resource_oauth2_return_url'] = resourceOauth2ReturnUrl;
    }
    public get resourceOauth2ReturnUrl(): string | undefined {
        return this['resource_oauth2_return_url'];
    }
    public withScopes(scopes: Array<string>): GetResourceOauth2TokenRequestBody {
        this['scopes'] = scopes;
        return this;
    }
    public withSessionUri(sessionUri: string): GetResourceOauth2TokenRequestBody {
        this['session_uri'] = sessionUri;
        return this;
    }
    public set sessionUri(sessionUri: string  | undefined) {
        this['session_uri'] = sessionUri;
    }
    public get sessionUri(): string | undefined {
        return this['session_uri'];
    }
    public withWorkloadAccessToken(workloadAccessToken: string): GetResourceOauth2TokenRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum GetResourceOauth2TokenRequestBodyOauth2FlowEnum {
    USER_FEDERATION = 'USER_FEDERATION',
    M2M = 'M2M'
}
