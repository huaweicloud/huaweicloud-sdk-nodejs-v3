

export class CreateSAMLProviderReqBody {
    public name?: string;
    private 'saml_metadata_document'?: string;
    private 'assertion_encryption_mode'?: CreateSAMLProviderReqBodyAssertionEncryptionModeEnum | string;
    private 'add_private_key'?: string;
    public description?: string;
    public constructor(name?: string, samlMetadataDocument?: string) { 
        this['name'] = name;
        this['saml_metadata_document'] = samlMetadataDocument;
    }
    public withName(name: string): CreateSAMLProviderReqBody {
        this['name'] = name;
        return this;
    }
    public withSamlMetadataDocument(samlMetadataDocument: string): CreateSAMLProviderReqBody {
        this['saml_metadata_document'] = samlMetadataDocument;
        return this;
    }
    public set samlMetadataDocument(samlMetadataDocument: string  | undefined) {
        this['saml_metadata_document'] = samlMetadataDocument;
    }
    public get samlMetadataDocument(): string | undefined {
        return this['saml_metadata_document'];
    }
    public withAssertionEncryptionMode(assertionEncryptionMode: CreateSAMLProviderReqBodyAssertionEncryptionModeEnum | string): CreateSAMLProviderReqBody {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
        return this;
    }
    public set assertionEncryptionMode(assertionEncryptionMode: CreateSAMLProviderReqBodyAssertionEncryptionModeEnum | string  | undefined) {
        this['assertion_encryption_mode'] = assertionEncryptionMode;
    }
    public get assertionEncryptionMode(): CreateSAMLProviderReqBodyAssertionEncryptionModeEnum | string | undefined {
        return this['assertion_encryption_mode'];
    }
    public withAddPrivateKey(addPrivateKey: string): CreateSAMLProviderReqBody {
        this['add_private_key'] = addPrivateKey;
        return this;
    }
    public set addPrivateKey(addPrivateKey: string  | undefined) {
        this['add_private_key'] = addPrivateKey;
    }
    public get addPrivateKey(): string | undefined {
        return this['add_private_key'];
    }
    public withDescription(description: string): CreateSAMLProviderReqBody {
        this['description'] = description;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSAMLProviderReqBodyAssertionEncryptionModeEnum {
    REQUIRED = 'Required',
    ALLOWED = 'Allowed'
}
