

export class SupabaseApiGitHubOAuthProvider {
    private 'enable_github'?: boolean;
    private 'oauth_client_id'?: string;
    private 'redirect_uri'?: string;
    public constructor() { 
    }
    public withEnableGithub(enableGithub: boolean): SupabaseApiGitHubOAuthProvider {
        this['enable_github'] = enableGithub;
        return this;
    }
    public set enableGithub(enableGithub: boolean  | undefined) {
        this['enable_github'] = enableGithub;
    }
    public get enableGithub(): boolean | undefined {
        return this['enable_github'];
    }
    public withOauthClientId(oauthClientId: string): SupabaseApiGitHubOAuthProvider {
        this['oauth_client_id'] = oauthClientId;
        return this;
    }
    public set oauthClientId(oauthClientId: string  | undefined) {
        this['oauth_client_id'] = oauthClientId;
    }
    public get oauthClientId(): string | undefined {
        return this['oauth_client_id'];
    }
    public withRedirectUri(redirectUri: string): SupabaseApiGitHubOAuthProvider {
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