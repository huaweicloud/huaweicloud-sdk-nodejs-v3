

export class SupabaseGitHubOAuthProviderReq {
    private 'enable_github'?: boolean;
    private 'oauth_client_id'?: string;
    private 'oauth_client_secret'?: string;
    private 'redirect_uri'?: string;
    public constructor() { 
    }
    public withEnableGithub(enableGithub: boolean): SupabaseGitHubOAuthProviderReq {
        this['enable_github'] = enableGithub;
        return this;
    }
    public set enableGithub(enableGithub: boolean  | undefined) {
        this['enable_github'] = enableGithub;
    }
    public get enableGithub(): boolean | undefined {
        return this['enable_github'];
    }
    public withOauthClientId(oauthClientId: string): SupabaseGitHubOAuthProviderReq {
        this['oauth_client_id'] = oauthClientId;
        return this;
    }
    public set oauthClientId(oauthClientId: string  | undefined) {
        this['oauth_client_id'] = oauthClientId;
    }
    public get oauthClientId(): string | undefined {
        return this['oauth_client_id'];
    }
    public withOauthClientSecret(oauthClientSecret: string): SupabaseGitHubOAuthProviderReq {
        this['oauth_client_secret'] = oauthClientSecret;
        return this;
    }
    public set oauthClientSecret(oauthClientSecret: string  | undefined) {
        this['oauth_client_secret'] = oauthClientSecret;
    }
    public get oauthClientSecret(): string | undefined {
        return this['oauth_client_secret'];
    }
    public withRedirectUri(redirectUri: string): SupabaseGitHubOAuthProviderReq {
        this['redirect_uri'] = redirectUri;
        return this;
    }
    public set redirectUri(redirectUri: string  | undefined) {
        this['redirect_uri'] = redirectUri;
    }
    public get redirectUri(): string | undefined {
        return this['redirect_uri'];
    }
}