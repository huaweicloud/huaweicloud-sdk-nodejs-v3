

export class ImportKeyMaterialRequestBody {
    private 'key_id'?: string;
    private 'import_token'?: string;
    private 'encrypted_key_material'?: string;
    private 'encrypted_privatekey'?: string;
    private 'expiration_time'?: number;
    public sequence?: string;
    public constructor(keyId?: string, importToken?: string, encryptedKeyMaterial?: string) { 
        this['key_id'] = keyId;
        this['import_token'] = importToken;
        this['encrypted_key_material'] = encryptedKeyMaterial;
    }
    public withKeyId(keyId: string): ImportKeyMaterialRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withImportToken(importToken: string): ImportKeyMaterialRequestBody {
        this['import_token'] = importToken;
        return this;
    }
    public set importToken(importToken: string  | undefined) {
        this['import_token'] = importToken;
    }
    public get importToken(): string | undefined {
        return this['import_token'];
    }
    public withEncryptedKeyMaterial(encryptedKeyMaterial: string): ImportKeyMaterialRequestBody {
        this['encrypted_key_material'] = encryptedKeyMaterial;
        return this;
    }
    public set encryptedKeyMaterial(encryptedKeyMaterial: string  | undefined) {
        this['encrypted_key_material'] = encryptedKeyMaterial;
    }
    public get encryptedKeyMaterial(): string | undefined {
        return this['encrypted_key_material'];
    }
    public withEncryptedPrivatekey(encryptedPrivatekey: string): ImportKeyMaterialRequestBody {
        this['encrypted_privatekey'] = encryptedPrivatekey;
        return this;
    }
    public set encryptedPrivatekey(encryptedPrivatekey: string  | undefined) {
        this['encrypted_privatekey'] = encryptedPrivatekey;
    }
    public get encryptedPrivatekey(): string | undefined {
        return this['encrypted_privatekey'];
    }
    public withExpirationTime(expirationTime: number): ImportKeyMaterialRequestBody {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): number | undefined {
        return this['expiration_time'];
    }
    public withSequence(sequence: string): ImportKeyMaterialRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}