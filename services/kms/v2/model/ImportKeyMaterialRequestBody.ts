

export class ImportKeyMaterialRequestBody {
    private 'key_id': string | undefined;
    private 'import_token': string | undefined;
    private 'encrypted_key_material': string | undefined;
    private 'encrypted_privatekey'?: string | undefined;
    private 'expiration_time'?: number | undefined;
    public sequence?: string;
    public constructor(keyId?: any, importToken?: any, encryptedKeyMaterial?: any) { 
        this['key_id'] = keyId;
        this['import_token'] = importToken;
        this['encrypted_key_material'] = encryptedKeyMaterial;
    }
    public withKeyId(keyId: string): ImportKeyMaterialRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withImportToken(importToken: string): ImportKeyMaterialRequestBody {
        this['import_token'] = importToken;
        return this;
    }
    public set importToken(importToken: string | undefined) {
        this['import_token'] = importToken;
    }
    public get importToken() {
        return this['import_token'];
    }
    public withEncryptedKeyMaterial(encryptedKeyMaterial: string): ImportKeyMaterialRequestBody {
        this['encrypted_key_material'] = encryptedKeyMaterial;
        return this;
    }
    public set encryptedKeyMaterial(encryptedKeyMaterial: string | undefined) {
        this['encrypted_key_material'] = encryptedKeyMaterial;
    }
    public get encryptedKeyMaterial() {
        return this['encrypted_key_material'];
    }
    public withEncryptedPrivatekey(encryptedPrivatekey: string): ImportKeyMaterialRequestBody {
        this['encrypted_privatekey'] = encryptedPrivatekey;
        return this;
    }
    public set encryptedPrivatekey(encryptedPrivatekey: string | undefined) {
        this['encrypted_privatekey'] = encryptedPrivatekey;
    }
    public get encryptedPrivatekey() {
        return this['encrypted_privatekey'];
    }
    public withExpirationTime(expirationTime: number): ImportKeyMaterialRequestBody {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: number | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime() {
        return this['expiration_time'];
    }
    public withSequence(sequence: string): ImportKeyMaterialRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}