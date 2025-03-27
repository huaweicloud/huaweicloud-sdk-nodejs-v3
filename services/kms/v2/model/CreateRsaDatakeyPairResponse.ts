
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRsaDatakeyPairResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'key_spec'?: CreateRsaDatakeyPairResponseKeySpecEnum | string;
    private 'public_key'?: string;
    private 'private_key_cipher_text'?: string;
    private 'private_key_plain_text'?: string;
    private 'wrapped_private_key'?: string;
    private 'ciphertext_recipient'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): CreateRsaDatakeyPairResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeySpec(keySpec: CreateRsaDatakeyPairResponseKeySpecEnum | string): CreateRsaDatakeyPairResponse {
        this['key_spec'] = keySpec;
        return this;
    }
    public set keySpec(keySpec: CreateRsaDatakeyPairResponseKeySpecEnum | string  | undefined) {
        this['key_spec'] = keySpec;
    }
    public get keySpec(): CreateRsaDatakeyPairResponseKeySpecEnum | string | undefined {
        return this['key_spec'];
    }
    public withPublicKey(publicKey: string): CreateRsaDatakeyPairResponse {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withPrivateKeyCipherText(privateKeyCipherText: string): CreateRsaDatakeyPairResponse {
        this['private_key_cipher_text'] = privateKeyCipherText;
        return this;
    }
    public set privateKeyCipherText(privateKeyCipherText: string  | undefined) {
        this['private_key_cipher_text'] = privateKeyCipherText;
    }
    public get privateKeyCipherText(): string | undefined {
        return this['private_key_cipher_text'];
    }
    public withPrivateKeyPlainText(privateKeyPlainText: string): CreateRsaDatakeyPairResponse {
        this['private_key_plain_text'] = privateKeyPlainText;
        return this;
    }
    public set privateKeyPlainText(privateKeyPlainText: string  | undefined) {
        this['private_key_plain_text'] = privateKeyPlainText;
    }
    public get privateKeyPlainText(): string | undefined {
        return this['private_key_plain_text'];
    }
    public withWrappedPrivateKey(wrappedPrivateKey: string): CreateRsaDatakeyPairResponse {
        this['wrapped_private_key'] = wrappedPrivateKey;
        return this;
    }
    public set wrappedPrivateKey(wrappedPrivateKey: string  | undefined) {
        this['wrapped_private_key'] = wrappedPrivateKey;
    }
    public get wrappedPrivateKey(): string | undefined {
        return this['wrapped_private_key'];
    }
    public withCiphertextRecipient(ciphertextRecipient: string): CreateRsaDatakeyPairResponse {
        this['ciphertext_recipient'] = ciphertextRecipient;
        return this;
    }
    public set ciphertextRecipient(ciphertextRecipient: string  | undefined) {
        this['ciphertext_recipient'] = ciphertextRecipient;
    }
    public get ciphertextRecipient(): string | undefined {
        return this['ciphertext_recipient'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRsaDatakeyPairResponseKeySpecEnum {
    RSA_2048 = 'RSA_2048',
    RSA_3072 = 'RSA_3072',
    RSA_4096 = 'RSA_4096',
    ECC_NIST_P256 = 'ECC_NIST_P256',
    ECC_NIST_P384 = 'ECC_NIST_P384',
    ECC_NIST_P521 = 'ECC_NIST_P521',
    ECC_SECG_P256K1 = 'ECC_SECG_P256K1',
    SM2 = 'SM2'
}
