import { CustomOauth2ProviderConfigInput } from './CustomOauth2ProviderConfigInput';
import { GithubOauth2ProviderConfigInput } from './GithubOauth2ProviderConfigInput';
import { GoogleOauth2ProviderConfigInput } from './GoogleOauth2ProviderConfigInput';
import { MicrosoftOauth2ProviderConfigInput } from './MicrosoftOauth2ProviderConfigInput';


export class Oauth2ProviderConfigInput {
    private 'microsoft_oauth2_provider_config'?: MicrosoftOauth2ProviderConfigInput;
    private 'google_oauth2_provider_config'?: GoogleOauth2ProviderConfigInput;
    private 'github_oauth2_provider_config'?: GithubOauth2ProviderConfigInput;
    private 'custom_oauth2_provider_config'?: CustomOauth2ProviderConfigInput;
    public constructor() { 
    }
    public withMicrosoftOauth2ProviderConfig(microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput): Oauth2ProviderConfigInput {
        this['microsoft_oauth2_provider_config'] = microsoftOauth2ProviderConfig;
        return this;
    }
    public set microsoftOauth2ProviderConfig(microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput  | undefined) {
        this['microsoft_oauth2_provider_config'] = microsoftOauth2ProviderConfig;
    }
    public get microsoftOauth2ProviderConfig(): MicrosoftOauth2ProviderConfigInput | undefined {
        return this['microsoft_oauth2_provider_config'];
    }
    public withGoogleOauth2ProviderConfig(googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput): Oauth2ProviderConfigInput {
        this['google_oauth2_provider_config'] = googleOauth2ProviderConfig;
        return this;
    }
    public set googleOauth2ProviderConfig(googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput  | undefined) {
        this['google_oauth2_provider_config'] = googleOauth2ProviderConfig;
    }
    public get googleOauth2ProviderConfig(): GoogleOauth2ProviderConfigInput | undefined {
        return this['google_oauth2_provider_config'];
    }
    public withGithubOauth2ProviderConfig(githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput): Oauth2ProviderConfigInput {
        this['github_oauth2_provider_config'] = githubOauth2ProviderConfig;
        return this;
    }
    public set githubOauth2ProviderConfig(githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput  | undefined) {
        this['github_oauth2_provider_config'] = githubOauth2ProviderConfig;
    }
    public get githubOauth2ProviderConfig(): GithubOauth2ProviderConfigInput | undefined {
        return this['github_oauth2_provider_config'];
    }
    public withCustomOauth2ProviderConfig(customOauth2ProviderConfig: CustomOauth2ProviderConfigInput): Oauth2ProviderConfigInput {
        this['custom_oauth2_provider_config'] = customOauth2ProviderConfig;
        return this;
    }
    public set customOauth2ProviderConfig(customOauth2ProviderConfig: CustomOauth2ProviderConfigInput  | undefined) {
        this['custom_oauth2_provider_config'] = customOauth2ProviderConfig;
    }
    public get customOauth2ProviderConfig(): CustomOauth2ProviderConfigInput | undefined {
        return this['custom_oauth2_provider_config'];
    }
}