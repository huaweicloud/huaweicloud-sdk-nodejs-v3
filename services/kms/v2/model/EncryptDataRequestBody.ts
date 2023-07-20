

export class EncryptDataRequestBody {
    private 'key_id'?: string;
    private 'plain_text'?: string;
    private 'encryption_algorithm'?: EncryptDataRequestBodyEncryptionAlgorithmEnum | string;
    public sequence?: string;
    public constructor(keyId?: string, plainText?: string) { 
        this['key_id'] = keyId;
        this['plain_text'] = plainText;
    }
    public withKeyId(keyId: string): EncryptDataRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withPlainText(plainText: string): EncryptDataRequestBody {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string  | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText(): string | undefined {
        return this['plain_text'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: EncryptDataRequestBodyEncryptionAlgorithmEnum | string): EncryptDataRequestBody {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: EncryptDataRequestBodyEncryptionAlgorithmEnum | string  | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm(): EncryptDataRequestBodyEncryptionAlgorithmEnum | string | undefined {
        return this['encryption_algorithm'];
    }
    public withSequence(sequence: string): EncryptDataRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EncryptDataRequestBodyEncryptionAlgorithmEnum {
    SYMMETRIC_DEFAULT = 'SYMMETRIC_DEFAULT',
    RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256',
    SM2_ENCRYPT = 'SM2_ENCRYPT'
}
