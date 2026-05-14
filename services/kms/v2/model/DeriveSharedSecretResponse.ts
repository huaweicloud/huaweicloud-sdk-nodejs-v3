
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeriveSharedSecretResponse extends SdkResponse {
    private 'key_id'?: string;
    private 'key_agreement_algorithm'?: string;
    private 'shared_secret'?: string;
    private 'ciphertext_recipient'?: string;
    public constructor() { 
        super();
    }
    public withKeyId(keyId: string): DeriveSharedSecretResponse {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyAgreementAlgorithm(keyAgreementAlgorithm: string): DeriveSharedSecretResponse {
        this['key_agreement_algorithm'] = keyAgreementAlgorithm;
        return this;
    }
    public set keyAgreementAlgorithm(keyAgreementAlgorithm: string  | undefined) {
        this['key_agreement_algorithm'] = keyAgreementAlgorithm;
    }
    public get keyAgreementAlgorithm(): string | undefined {
        return this['key_agreement_algorithm'];
    }
    public withSharedSecret(sharedSecret: string): DeriveSharedSecretResponse {
        this['shared_secret'] = sharedSecret;
        return this;
    }
    public set sharedSecret(sharedSecret: string  | undefined) {
        this['shared_secret'] = sharedSecret;
    }
    public get sharedSecret(): string | undefined {
        return this['shared_secret'];
    }
    public withCiphertextRecipient(ciphertextRecipient: string): DeriveSharedSecretResponse {
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