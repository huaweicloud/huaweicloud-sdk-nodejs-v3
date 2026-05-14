import { Recipient } from './Recipient';


export class DeriveSharedSecretRequestBody {
    private 'key_id'?: string;
    private 'key_agreement_algorithm'?: DeriveSharedSecretRequestBodyKeyAgreementAlgorithmEnum | string;
    private 'public_key'?: string;
    public recipient?: Recipient;
    public constructor(keyId?: string, keyAgreementAlgorithm?: string, publicKey?: string) { 
        this['key_id'] = keyId;
        this['key_agreement_algorithm'] = keyAgreementAlgorithm;
        this['public_key'] = publicKey;
    }
    public withKeyId(keyId: string): DeriveSharedSecretRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withKeyAgreementAlgorithm(keyAgreementAlgorithm: DeriveSharedSecretRequestBodyKeyAgreementAlgorithmEnum | string): DeriveSharedSecretRequestBody {
        this['key_agreement_algorithm'] = keyAgreementAlgorithm;
        return this;
    }
    public set keyAgreementAlgorithm(keyAgreementAlgorithm: DeriveSharedSecretRequestBodyKeyAgreementAlgorithmEnum | string  | undefined) {
        this['key_agreement_algorithm'] = keyAgreementAlgorithm;
    }
    public get keyAgreementAlgorithm(): DeriveSharedSecretRequestBodyKeyAgreementAlgorithmEnum | string | undefined {
        return this['key_agreement_algorithm'];
    }
    public withPublicKey(publicKey: string): DeriveSharedSecretRequestBody {
        this['public_key'] = publicKey;
        return this;
    }
    public set publicKey(publicKey: string  | undefined) {
        this['public_key'] = publicKey;
    }
    public get publicKey(): string | undefined {
        return this['public_key'];
    }
    public withRecipient(recipient: Recipient): DeriveSharedSecretRequestBody {
        this['recipient'] = recipient;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeriveSharedSecretRequestBodyKeyAgreementAlgorithmEnum {
    ECDH = 'ECDH'
}
