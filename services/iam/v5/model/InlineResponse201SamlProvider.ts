import { InlineResponse200PrivateKeys } from './InlineResponse200PrivateKeys';


export class InlineResponse201SamlProvider {
    private 'provider_id'?: string;
    public name?: string;
    public description?: string;
    public urn?: string;
    private 'saml_metadata_document'?: string;
    private 'assertion_encryption_mode'?: InlineResponse201SamlProviderAssertionEncryptionModeEnum | string;
    private 'private_keys'?: Array<InlineResponse200PrivateKeys>;
    private 'created_at'?: Date;
    private 'expires_at'?: Date;
    public constructor(providerId?: string, name?: string, description?: string, urn?: string, samlMetadataDocument?: string, assertionEncryptionMode?: string, privateKeys?: Array<InlineResponse200PrivateKeys>, createdAt?: Date, expiresAt?: Date) { 
        this['provider_id'] = providerId;
        this['name'] = name;
        this['description'] = description;
        this['urn'] = urn;
        this['saml_metadata_document'] = samlMetadataDocument;
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        this['private_keys'] = privateKeys;
        this['created_at'] = createdAt;
        this['expires_at'] = expiresAt;
    }
    public withProviderId(providerId: string): InlineResponse201SamlProvider {
        this['provider_id'] = providerId;
        return this;
    }
    public set providerId(providerId: string  | undefined) {
        this['provider_id'] = providerId;
    }
    public get providerId(): string | undefined {
        return this['provider_id'];
    }
    public withName(name: string): InlineResponse201SamlProvider {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): InlineResponse201SamlProvider {
        this['description'] = description;
        return this;
    }
    public withUrn(urn: string): InlineResponse201SamlProvider {
        this['urn'] = urn;
        return this;
    }
    public withSamlMetadataDocument(samlMetadataDocument: string): InlineResponse201SamlProvider {
        this['saml_metadata_document'] = samlMetadataDocument;
        return this;
    }
    public set samlMetadataDocument(samlMetadataDocument: string  | undefined) {
        this['saml_metadata_document'] = samlMetadataDocument;
    }
    public get samlMetadataDocument(): string | undefined {
        return this['saml_metadata_document'];
    }
    public withAssertionEncryptionMode(assertionEncryptionMode: InlineResponse201SamlProviderAssertionEncryptionModeEnum | string): InlineResponse201SamlProvider {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        return this;
    }
    public set assertionEncryptionMode(assertionEncryptionMode: InlineResponse201SamlProviderAssertionEncryptionModeEnum | string  | undefined) {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
    }
    public get assertionEncryptionMode(): InlineResponse201SamlProviderAssertionEncryptionModeEnum | string | undefined {
        return this['assertion_encryption_mode'];
    }
    public withPrivateKeys(privateKeys: Array<InlineResponse200PrivateKeys>): InlineResponse201SamlProvider {
        this['private_keys'] = privateKeys;
        return this;
    }
    public set privateKeys(privateKeys: Array<InlineResponse200PrivateKeys>  | undefined) {
        this['private_keys'] = privateKeys;
    }
    public get privateKeys(): Array<InlineResponse200PrivateKeys> | undefined {
        return this['private_keys'];
    }
    public withCreatedAt(createdAt: Date): InlineResponse201SamlProvider {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withExpiresAt(expiresAt: Date): InlineResponse201SamlProvider {
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
export enum InlineResponse201SamlProviderAssertionEncryptionModeEnum {
    REQUIRED = 'Required',
    ALLOWED = 'Allowed'
}
