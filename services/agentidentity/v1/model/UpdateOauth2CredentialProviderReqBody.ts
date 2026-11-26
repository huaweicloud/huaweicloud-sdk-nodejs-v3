import { Oauth2ProviderConfigInput } from './Oauth2ProviderConfigInput';
import { Tag } from './Tag';


export class UpdateOauth2CredentialProviderReqBody {
    private 'oauth2_provider_config_input'?: Oauth2ProviderConfigInput;
    public tags?: Array<Tag>;
    public constructor() { 
    }
    public withOauth2ProviderConfigInput(oauth2ProviderConfigInput: Oauth2ProviderConfigInput): UpdateOauth2CredentialProviderReqBody {
        this['oauth2_provider_config_input'] = oauth2ProviderConfigInput;
        return this;
    }
    public set oauth2ProviderConfigInput(oauth2ProviderConfigInput: Oauth2ProviderConfigInput  | undefined) {
        this['oauth2_provider_config_input'] = oauth2ProviderConfigInput;
    }
    public get oauth2ProviderConfigInput(): Oauth2ProviderConfigInput | undefined {
        return this['oauth2_provider_config_input'];
    }
    public withTags(tags: Array<Tag>): UpdateOauth2CredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}