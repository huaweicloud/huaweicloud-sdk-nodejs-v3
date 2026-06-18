

export class UpdateSAMLProviderReqBody {
    private 'saml_metadata_document'?: string;
    private 'assertion_encryption_mode'?: UpdateSAMLProviderReqBodyAssertionEncryptionModeEnum | string;
    private 'add_private_key'?: string;
    private 'remove_private_key'?: string;
    public description?: string;
    public constructor() { 
    }
    public withSamlMetadataDocument(samlMetadataDocument: string): UpdateSAMLProviderReqBody {
        this['saml_metadata_document'] = samlMetadataDocument;
        return this;
    }
    public set samlMetadataDocument(samlMetadataDocument: string  | undefined) {
        this['saml_metadata_document'] = samlMetadataDocument;
    }
    public get samlMetadataDocument(): string | undefined {
        return this['saml_metadata_document'];
    }
    public withAssertionEncryptionMode(assertionEncryptionMode: UpdateSAMLProviderReqBodyAssertionEncryptionModeEnum | string): UpdateSAMLProviderReqBody {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        return this;
    }
    public set assertionEncryptionMode(assertionEncryptionMode: UpdateSAMLProviderReqBodyAssertionEncryptionModeEnum | string  | undefined) {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
    }
    public get assertionEncryptionMode(): UpdateSAMLProviderReqBodyAssertionEncryptionModeEnum | string | undefined {
        return this['assertion_encryption_mode'];
    }
    public withAddPrivateKey(addPrivateKey: string): UpdateSAMLProviderReqBody {
        this['add_private_key'] = addPrivateKey;
        return this;
    }
    public set addPrivateKey(addPrivateKey: string  | undefined) {
        this['add_private_key'] = addPrivateKey;
    }
    public get addPrivateKey(): string | undefined {
        return this['add_private_key'];
    }
    public withRemovePrivateKey(removePrivateKey: string): UpdateSAMLProviderReqBody {
        this['remove_private_key'] = removePrivateKey;
        return this;
    }
    public set removePrivateKey(removePrivateKey: string  | undefined) {
        this['remove_private_key'] = removePrivateKey;
    }
    public get removePrivateKey(): string | undefined {
        return this['remove_private_key'];
    }
    public withDescription(description: string): UpdateSAMLProviderReqBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateSAMLProviderReqBodyAssertionEncryptionModeEnum {
    REQUIRED = 'Required',
    ALLOWED = 'Allowed'
}
