

export class Oauth2CallbackRequest {
    private 'credential_provider_id'?: string;
    public code?: string;
    public state?: string;
    public error?: string;
    private 'error_description'?: string;
    public constructor(credentialProviderId?: string, state?: string) { 
        this['credential_provider_id'] = credentialProviderId;
        this['state'] = state;
    }
    public withCredentialProviderId(credentialProviderId: string): Oauth2CallbackRequest {
        this['credential_provider_id'] = credentialProviderId;
        return this;
    }
    public set credentialProviderId(credentialProviderId: string  | undefined) {
        this['credential_provider_id'] = credentialProviderId;
    }
    public get credentialProviderId(): string | undefined {
        return this['credential_provider_id'];
    }
    public withCode(code: string): Oauth2CallbackRequest {
        this['code'] = code;
        return this;
    }
    public withState(state: string): Oauth2CallbackRequest {
        this['state'] = state;
        return this;
    }
    public withError(error: string): Oauth2CallbackRequest {
        this['error'] = error;
        return this;
    }
    public withErrorDescription(errorDescription: string): Oauth2CallbackRequest {
        this['error_description'] = errorDescription;
        return this;
    }
    public set errorDescription(errorDescription: string  | undefined) {
        this['error_description'] = errorDescription;
    }
    public get errorDescription(): string | undefined {
        return this['error_description'];
    }
}