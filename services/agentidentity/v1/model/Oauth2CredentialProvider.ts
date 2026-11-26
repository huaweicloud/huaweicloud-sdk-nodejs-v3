import { CredentialProviderVendor } from './CredentialProviderVendor';
import { Oauth2ProviderConfigOutput } from './Oauth2ProviderConfigOutput';
import { Secret } from './Secret';
import { Tag } from './Tag';


export class Oauth2CredentialProvider {
    public name?: string;
    public urn?: string;
    private 'credential_provider_vendor'?: CredentialProviderVendor;
    private 'client_secret'?: Secret;
    private 'callback_url'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'oauth2_provider_config_output'?: Oauth2ProviderConfigOutput;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, credentialProviderVendor?: CredentialProviderVendor, clientSecret?: Secret, callbackUrl?: string, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['credential_provider_vendor'] = credentialProviderVendor;
        this['client_secret'] = clientSecret;
        this['callback_url'] = callbackUrl;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): Oauth2CredentialProvider {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): Oauth2CredentialProvider {
        this['urn'] = urn;
        return this;
    }
    public withCredentialProviderVendor(credentialProviderVendor: CredentialProviderVendor): Oauth2CredentialProvider {
        this['credential_provider_vendor'] = credentialProviderVendor;
        return this;
    }
    public set credentialProviderVendor(credentialProviderVendor: CredentialProviderVendor  | undefined) {
        this['credential_provider_vendor'] = credentialProviderVendor;
    }
    public get credentialProviderVendor(): CredentialProviderVendor | undefined {
        return this['credential_provider_vendor'];
    }
    public withClientSecret(clientSecret: Secret): Oauth2CredentialProvider {
        this['client_secret'] = clientSecret;
        return this;
    }
    public set clientSecret(clientSecret: Secret  | undefined) {
        this['client_secret'] = clientSecret;
    }
    public get clientSecret(): Secret | undefined {
        return this['client_secret'];
    }
    public withCallbackUrl(callbackUrl: string): Oauth2CredentialProvider {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string  | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl(): string | undefined {
        return this['callback_url'];
    }
    public withCreatedAt(createdAt: Date): Oauth2CredentialProvider {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Oauth2CredentialProvider {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withOauth2ProviderConfigOutput(oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput): Oauth2CredentialProvider {
        this['oauth2_provider_config_output'] = oauth2ProviderConfigOutput;
        return this;
    }
    public set oauth2ProviderConfigOutput(oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput  | undefined) {
        this['oauth2_provider_config_output'] = oauth2ProviderConfigOutput;
    }
    public get oauth2ProviderConfigOutput(): Oauth2ProviderConfigOutput | undefined {
        return this['oauth2_provider_config_output'];
    }
    public withTags(tags: Array<Tag>): Oauth2CredentialProvider {
        this['tags'] = tags;
        return this;
    }
}