import { CredentialProviderVendor } from './CredentialProviderVendor';
import { Oauth2ProviderConfigInput } from './Oauth2ProviderConfigInput';
import { Tag } from './Tag';


export class CreateOauth2CredentialProviderReqBody {
    public name?: string;
    private 'credential_provider_vendor'?: CredentialProviderVendor;
    private 'oauth2_provider_config_input'?: Oauth2ProviderConfigInput;
    public tags?: Array<Tag>;
    public constructor(name?: string, credentialProviderVendor?: CredentialProviderVendor, oauth2ProviderConfigInput?: Oauth2ProviderConfigInput) { 
        this['name'] = name;
        this['credential_provider_vendor'] = credentialProviderVendor;
        this['oauth2_provider_config_input'] = oauth2ProviderConfigInput;
    }
    public withName(name: string): CreateOauth2CredentialProviderReqBody {
        this['name'] = name;
        return this;
    }
    public withCredentialProviderVendor(credentialProviderVendor: CredentialProviderVendor): CreateOauth2CredentialProviderReqBody {
        this['credential_provider_vendor'] = credentialProviderVendor;
        return this;
    }
    public set credentialProviderVendor(credentialProviderVendor: CredentialProviderVendor  | undefined) {
        this['credential_provider_vendor'] = credentialProviderVendor;
    }
    public get credentialProviderVendor(): CredentialProviderVendor | undefined {
        return this['credential_provider_vendor'];
    }
    public withOauth2ProviderConfigInput(oauth2ProviderConfigInput: Oauth2ProviderConfigInput): CreateOauth2CredentialProviderReqBody {
        this['oauth2_provider_config_input'] = oauth2ProviderConfigInput;
        return this;
    }
    public set oauth2ProviderConfigInput(oauth2ProviderConfigInput: Oauth2ProviderConfigInput  | undefined) {
        this['oauth2_provider_config_input'] = oauth2ProviderConfigInput;
    }
    public get oauth2ProviderConfigInput(): Oauth2ProviderConfigInput | undefined {
        return this['oauth2_provider_config_input'];
    }
    public withTags(tags: Array<Tag>): CreateOauth2CredentialProviderReqBody {
        this['tags'] = tags;
        return this;
    }
}