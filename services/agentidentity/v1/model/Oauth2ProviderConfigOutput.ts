import { CustomOauth2ProviderConfigOutput } from './CustomOauth2ProviderConfigOutput';
import { GithubOauth2ProviderConfigOutput } from './GithubOauth2ProviderConfigOutput';
import { GoogleOauth2ProviderConfigOutput } from './GoogleOauth2ProviderConfigOutput';
import { MicrosoftOauth2ProviderConfigOutput } from './MicrosoftOauth2ProviderConfigOutput';


export class Oauth2ProviderConfigOutput {
    private 'microsoft_oauth2_provider_config'?: MicrosoftOauth2ProviderConfigOutput;
    private 'google_oauth2_provider_config'?: GoogleOauth2ProviderConfigOutput;
    private 'github_oauth2_provider_config'?: GithubOauth2ProviderConfigOutput;
    private 'custom_oauth2_provider_config'?: CustomOauth2ProviderConfigOutput;
    public constructor() { 
    }
    public withMicrosoftOauth2ProviderConfig(microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput): Oauth2ProviderConfigOutput {
        this['microsoft_oauth2_provider_config'] = microsoftOauth2ProviderConfig;
        return this;
    }
    public set microsoftOauth2ProviderConfig(microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput  | undefined) {
        this['microsoft_oauth2_provider_config'] = microsoftOauth2ProviderConfig;
    }
    public get microsoftOauth2ProviderConfig(): MicrosoftOauth2ProviderConfigOutput | undefined {
        return this['microsoft_oauth2_provider_config'];
    }
    public withGoogleOauth2ProviderConfig(googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput): Oauth2ProviderConfigOutput {
        this['google_oauth2_provider_config'] = googleOauth2ProviderConfig;
        return this;
    }
    public set googleOauth2ProviderConfig(googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput  | undefined) {
        this['google_oauth2_provider_config'] = googleOauth2ProviderConfig;
    }
    public get googleOauth2ProviderConfig(): GoogleOauth2ProviderConfigOutput | undefined {
        return this['google_oauth2_provider_config'];
    }
    public withGithubOauth2ProviderConfig(githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput): Oauth2ProviderConfigOutput {
        this['github_oauth2_provider_config'] = githubOauth2ProviderConfig;
        return this;
    }
    public set githubOauth2ProviderConfig(githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput  | undefined) {
        this['github_oauth2_provider_config'] = githubOauth2ProviderConfig;
    }
    public get githubOauth2ProviderConfig(): GithubOauth2ProviderConfigOutput | undefined {
        return this['github_oauth2_provider_config'];
    }
    public withCustomOauth2ProviderConfig(customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput): Oauth2ProviderConfigOutput {
        this['custom_oauth2_provider_config'] = customOauth2ProviderConfig;
        return this;
    }
    public set customOauth2ProviderConfig(customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput  | undefined) {
        this['custom_oauth2_provider_config'] = customOauth2ProviderConfig;
    }
    public get customOauth2ProviderConfig(): CustomOauth2ProviderConfigOutput | undefined {
        return this['custom_oauth2_provider_config'];
    }
}