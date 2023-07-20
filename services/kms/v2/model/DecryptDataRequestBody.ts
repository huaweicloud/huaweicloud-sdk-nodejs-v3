

export class DecryptDataRequestBody {
    private 'cipher_text'?: string;
    private 'encryption_algorithm'?: DecryptDataRequestBodyEncryptionAlgorithmEnum | string;
    private 'key_id'?: string;
    public sequence?: string;
    public constructor(cipherText?: string) { 
        this['cipher_text'] = cipherText;
    }
    public withCipherText(cipherText: string): DecryptDataRequestBody {
        this['cipher_text'] = cipherText;
        return this;
    }
    public set cipherText(cipherText: string  | undefined) {
        this['cipher_text'] = cipherText;
    }
    public get cipherText(): string | undefined {
        return this['cipher_text'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: DecryptDataRequestBodyEncryptionAlgorithmEnum | string): DecryptDataRequestBody {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: DecryptDataRequestBodyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): DecryptDataRequestBodyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withKeyId(keyId: string): DecryptDataRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withSequence(sequence: string): DecryptDataRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DecryptDataRequestBodyEncryptionAlgorithmEnum {
    SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT',
    RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256',
    SM2_ENCRYPT = 'SM2_ENCRYPT'
}
