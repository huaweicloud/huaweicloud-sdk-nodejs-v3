import { SupabaseApiEmailOAuthProvider } from './SupabaseApiEmailOAuthProvider';
import { SupabaseApiEmailTemplate } from './SupabaseApiEmailTemplate';
import { SupabaseApiGitHubOAuthProvider } from './SupabaseApiGitHubOAuthProvider';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSupabaseApplicationAuthConfigResponse extends SdkResponse {
    private 'updated_time'?: number;
    private 'enable_account_sign_up'?: boolean;
    private 'enable_anonymous_users'?: boolean;
    private 'api_external_url'?: string;
    private 'site_url'?: string;
    private 'allow_redirect_urls'?: string;
    private 'github_oauth_provider'?: SupabaseApiGitHubOAuthProvider;
    private 'email_oauth_provider'?: SupabaseApiEmailOAuthProvider;
    private 'email_template_config'?: SupabaseApiEmailTemplate;
    public constructor() { 
        super();
    }
    public withUpdatedTime(updatedTime: number): ShowSupabaseApplicationAuthConfigResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: number  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): number | undefined {
        return this['updated_time'];
    }
    public withEnableAccountSignUp(enableAccountSignUp: boolean): ShowSupabaseApplicationAuthConfigResponse {
        this['enable_account_sign_up'] = enableAccountSignUp;
        return this;
    }
    public set enableAccountSignUp(enableAccountSignUp: boolean  | undefined) {
        this['enable_account_sign_up'] = enableAccountSignUp;
    }
    public get enableAccountSignUp(): boolean | undefined {
        return this['enable_account_sign_up'];
    }
    public withEnableAnonymousUsers(enableAnonymousUsers: boolean): ShowSupabaseApplicationAuthConfigResponse {
        this['enable_anonymous_users'] = enableAnonymousUsers;
        return this;
    }
    public set enableAnonymousUsers(enableAnonymousUsers: boolean  | undefined) {
        this['enable_anonymous_users'] = enableAnonymousUsers;
    }
    public get enableAnonymousUsers(): boolean | undefined {
        return this['enable_anonymous_users'];
    }
    public withApiExternalUrl(apiExternalUrl: string): ShowSupabaseApplicationAuthConfigResponse {
        this['api_external_url'] = apiExternalUrl;
        return this;
    }
    public set apiExternalUrl(apiExternalUrl: string  | undefined) {
        this['api_external_url'] = apiExternalUrl;
    }
    public get apiExternalUrl(): string | undefined {
        return this['api_external_url'];
    }
    public withSiteUrl(siteUrl: string): ShowSupabaseApplicationAuthConfigResponse {
        this['site_url'] = siteUrl;
        return this;
    }
    public set siteUrl(siteUrl: string  | undefined) {
        this['site_url'] = siteUrl;
    }
    public get siteUrl(): string | undefined {
        return this['site_url'];
    }
    public withAllowRedirectUrls(allowRedirectUrls: string): ShowSupabaseApplicationAuthConfigResponse {
        this['allow_redirect_urls'] = allowRedirectUrls;
        return this;
    }
    public set allowRedirectUrls(allowRedirectUrls: string  | undefined) {
        this['allow_redirect_urls'] = allowRedirectUrls;
    }
    public get allowRedirectUrls(): string | undefined {
        return this['allow_redirect_urls'];
    }
    public withGithubOauthProvider(githubOauthProvider: SupabaseApiGitHubOAuthProvider): ShowSupabaseApplicationAuthConfigResponse {
        this['github_oauth_provider'] = githubOauthProvider;
        return this;
    }
    public set githubOauthProvider(githubOauthProvider: SupabaseApiGitHubOAuthProvider  | undefined) {
        this['github_oauth_provider'] = githubOauthProvider;
    }
    public get githubOauthProvider(): SupabaseApiGitHubOAuthProvider | undefined {
        return this['github_oauth_provider'];
    }
    public withEmailOauthProvider(emailOauthProvider: SupabaseApiEmailOAuthProvider): ShowSupabaseApplicationAuthConfigResponse {
        this['email_oauth_provider'] = emailOauthProvider;
        return this;
    }
    public set emailOauthProvider(emailOauthProvider: SupabaseApiEmailOAuthProvider  | undefined) {
        this['email_oauth_provider'] = emailOauthProvider;
    }
    public get emailOauthProvider(): SupabaseApiEmailOAuthProvider | undefined {
        return this['email_oauth_provider'];
    }
    public withEmailTemplateConfig(emailTemplateConfig: SupabaseApiEmailTemplate): ShowSupabaseApplicationAuthConfigResponse {
        this['email_template_config'] = emailTemplateConfig;
        return this;
    }
    public set emailTemplateConfig(emailTemplateConfig: SupabaseApiEmailTemplate  | undefined) {
        this['email_template_config'] = emailTemplateConfig;
    }
    public get emailTemplateConfig(): SupabaseApiEmailTemplate | undefined {
        return this['email_template_config'];
    }
}