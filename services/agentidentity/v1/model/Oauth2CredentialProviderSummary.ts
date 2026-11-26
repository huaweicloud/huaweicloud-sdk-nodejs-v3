import { CredentialProviderVendor } from './CredentialProviderVendor';
import { Tag } from './Tag';


export class Oauth2CredentialProviderSummary {
    public name?: string;
    public urn?: string;
    private 'credential_provider_vendor'?: CredentialProviderVendor;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(name?: string, urn?: string, credentialProviderVendor?: CredentialProviderVendor, createdAt?: Date, updatedAt?: Date) { 
        this['name'] = name;
        this['urn'] = urn;
        this['credential_provider_vendor'] = credentialProviderVendor;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withName(name: string): Oauth2CredentialProviderSummary {
        this['name'] = name;
        return this;
    }
    public withUrn(urn: string): Oauth2CredentialProviderSummary {
        this['urn'] = urn;
        return this;
    }
    public withCredentialProviderVendor(credentialProviderVendor: CredentialProviderVendor): Oauth2CredentialProviderSummary {
        this['credential_provider_vendor'] = credentialProviderVendor;
        return this;
    }
    public set credentialProviderVendor(credentialProviderVendor: CredentialProviderVendor  | undefined) {
        this['credential_provider_vendor'] = credentialProviderVendor;
    }
    public get credentialProviderVendor(): CredentialProviderVendor | undefined {
        return this['credential_provider_vendor'];
    }
    public withCreatedAt(createdAt: Date): Oauth2CredentialProviderSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Oauth2CredentialProviderSummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): Oauth2CredentialProviderSummary {
        this['tags'] = tags;
        return this;
    }
}