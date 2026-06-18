import { InlineResponse2001SamlProviderTags } from './InlineResponse2001SamlProviderTags';
import { InlineResponse200PrivateKeys } from './InlineResponse200PrivateKeys';


export class InlineResponse2001SamlProvider {
    private 'provider_id'?: string;
    public name?: string;
    public description?: string;
    public urn?: string;
    private 'saml_metadata_document'?: string;
    private 'assertion_encryption_mode'?: InlineResponse2001SamlProviderAssertionEncryptionModeEnum | string;
    private 'private_keys'?: Array<InlineResponse200PrivateKeys>;
    public tags?: Array<InlineResponse2001SamlProviderTags>;
    private 'created_at'?: Date;
    private 'expires_at'?: Date;
    public constructor(providerId?: string, name?: string, description?: string, urn?: string, samlMetadataDocument?: string, assertionEncryptionMode?: string, privateKeys?: Array<InlineResponse200PrivateKeys>, tags?: Array<InlineResponse2001SamlProviderTags>, createdAt?: Date, expiresAt?: Date) { 
        this['provider_id'] = providerId;
        this['name'] = name;
        this['description'] = description;
        this['urn'] = urn;
        this['saml_metadata_document'] = samlMetadataDocument;
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        this['private_keys'] = privateKeys;
        this['tags'] = tags;
        this['created_at'] = createdAt;
        this['expires_at'] = expiresAt;
    }
    public withProviderId(providerId: string): InlineResponse2001SamlProvider {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withName(name: string): InlineResponse2001SamlProvider {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InlineResponse2001SamlProvider {
        this['description'] = description;
        return this;
    }
    public withUrn(urn: string): InlineResponse2001SamlProvider {
        this['urn'] = urn;
        return this;
    }
    public withSamlMetadataDocument(samlMetadataDocument: string): InlineResponse2001SamlProvider {
        this['saml_metadata_document'] = samlMetadataDocument;
        return this;
    }
    public set samlMetadataDocument(samlMetadataDocument: string  | undefined) {
        this['saml_metadata_document'] = samlMetadataDocument;
    }
    public get samlMetadataDocument(): string | undefined {
        return this['saml_metadata_document'];
    }
    public withAssertionEncryptionMode(assertionEncryptionMode: InlineResponse2001SamlProviderAssertionEncryptionModeEnum | string): InlineResponse2001SamlProvider {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        return this;
    }
    public set assertionEncryptionMode(assertionEncryptionMode: InlineResponse2001SamlProviderAssertionEncryptionModeEnum | string  | undefined) {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
    }
    public get assertionEncryptionMode(): InlineResponse2001SamlProviderAssertionEncryptionModeEnum | string | undefined {
        return this['assertion_encryption_mode'];
    }
    public withPrivateKeys(privateKeys: Array<InlineResponse200PrivateKeys>): InlineResponse2001SamlProvider {
        this['private_keys'] = privateKeys;
        return this;
    }
    public set privateKeys(privateKeys: Array<InlineResponse200PrivateKeys>  | undefined) {
        this['private_keys'] = privateKeys;
    }
    public get privateKeys(): Array<InlineResponse200PrivateKeys> | undefined {
        return this['private_keys'];
    }
    public withTags(tags: Array<InlineResponse2001SamlProviderTags>): InlineResponse2001SamlProvider {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): InlineResponse2001SamlProvider {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withExpiresAt(expiresAt: Date): InlineResponse2001SamlProvider {
        this['expires_at'] = expiresAt;
        return this;
    }
    public set expiresAt(expiresAt: Date  | undefined) {
        this['expires_at'] = expiresAt;
    }
    public get expiresAt(): Date | undefined {
        return this['expires_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse2001SamlProviderAssertionEncryptionModeEnum {
    REQUIRED = 'Required',
    ALLOWED = 'Allowed'
}
