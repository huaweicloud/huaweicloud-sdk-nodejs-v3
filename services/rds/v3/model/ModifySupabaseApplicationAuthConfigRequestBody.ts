import { SupabaseEmailOAuthProviderReq } from './SupabaseEmailOAuthProviderReq';
import { SupabaseEmailTemplateReq } from './SupabaseEmailTemplateReq';
import { SupabaseGitHubOAuthProviderReq } from './SupabaseGitHubOAuthProviderReq';


export class ModifySupabaseApplicationAuthConfigRequestBody {
    private 'enable_account_sign_up'?: boolean;
    private 'enable_anonymous_users'?: boolean;
    private 'api_external_url'?: string;
    private 'site_url'?: string;
    private 'allow_redirect_urls'?: string;
    private 'github_oauth_provider'?: SupabaseGitHubOAuthProviderReq;
    private 'email_oauth_provider'?: SupabaseEmailOAuthProviderReq;
    private 'email_template_config'?: SupabaseEmailTemplateReq;
    public constructor() { 
    }
    public withEnableAccountSignUp(enableAccountSignUp: boolean): ModifySupabaseApplicationAuthConfigRequestBody {
        this['enable_account_sign_up'] = enableAccountSignUp;
        return this;
    }
    public set enableAccountSignUp(enableAccountSignUp: boolean  | undefined) {
        this['enable_account_sign_up'] = enableAccountSignUp;
    }
    public get enableAccountSignUp(): boolean | undefined {
        return this['enable_account_sign_up'];
    }
    public withEnableAnonymousUsers(enableAnonymousUsers: boolean): ModifySupabaseApplicationAuthConfigRequestBody {
        this['enable_anonymous_users'] = enableAnonymousUsers;
        return this;
    }
    public set enableAnonymousUsers(enableAnonymousUsers: boolean  | undefined) {
        this['enable_anonymous_users'] = enableAnonymousUsers;
    }
    public get enableAnonymousUsers(): boolean | undefined {
        return this['enable_anonymous_users'];
    }
    public withApiExternalUrl(apiExternalUrl: string): ModifySupabaseApplicationAuthConfigRequestBody {
        this['api_external_url'] = apiExternalUrl;
        return this;
    }
    public set apiExternalUrl(apiExternalUrl: string  | undefined) {
        this['api_external_url'] = apiExternalUrl;
    }
    public get apiExternalUrl(): string | undefined {
        return this['api_external_url'];
    }
    public withSiteUrl(siteUrl: string): ModifySupabaseApplicationAuthConfigRequestBody {
        this['site_url'] = siteUrl;
        return this;
    }
    public set siteUrl(siteUrl: string  | undefined) {
        this['site_url'] = siteUrl;
    }
    public get siteUrl(): string | undefined {
        return this['site_url'];
    }
    public withAllowRedirectUrls(allowRedirectUrls: string): ModifySupabaseApplicationAuthConfigRequestBody {
        this['allow_redirect_urls'] = allowRedirectUrls;
        return this;
    }
    public set allowRedirectUrls(allowRedirectUrls: string  | undefined) {
        this['allow_redirect_urls'] = allowRedirectUrls;
    }
    public get allowRedirectUrls(): string | undefined {
        return this['allow_redirect_urls'];
    }
    public withGithubOauthProvider(githubOauthProvider: SupabaseGitHubOAuthProviderReq): ModifySupabaseApplicationAuthConfigRequestBody {
        this['github_oauth_provider'] = githubOauthProvider;
        return this;
    }
    public set githubOauthProvider(githubOauthProvider: SupabaseGitHubOAuthProviderReq  | undefined) {
        this['github_oauth_provider'] = githubOauthProvider;
    }
    public get githubOauthProvider(): SupabaseGitHubOAuthProviderReq | undefined {
        return this['github_oauth_provider'];
    }
    public withEmailOauthProvider(emailOauthProvider: SupabaseEmailOAuthProviderReq): ModifySupabaseApplicationAuthConfigRequestBody {
        this['email_oauth_provider'] = emailOauthProvider;
        return this;
    }
    public set emailOauthProvider(emailOauthProvider: SupabaseEmailOAuthProviderReq  | undefined) {
        this['email_oauth_provider'] = emailOauthProvider;
    }
    public get emailOauthProvider(): SupabaseEmailOAuthProviderReq | undefined {
        return this['email_oauth_provider'];
    }
    public withEmailTemplateConfig(emailTemplateConfig: SupabaseEmailTemplateReq): ModifySupabaseApplicationAuthConfigRequestBody {
        this['email_template_config'] = emailTemplateConfig;
        return this;
    }
    public set emailTemplateConfig(emailTemplateConfig: SupabaseEmailTemplateReq  | undefined) {
        this['email_template_config'] = emailTemplateConfig;
    }
    public get emailTemplateConfig(): SupabaseEmailTemplateReq | undefined {
        return this['email_template_config'];
    }
}