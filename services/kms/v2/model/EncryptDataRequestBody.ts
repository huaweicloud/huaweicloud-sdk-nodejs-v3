

export class EncryptDataRequestBody {
    private 'key_id': string | undefined;
    private 'plain_text': string | undefined;
    private 'encryption_algorithm'?: EncryptDataRequestBodyEncryptionAlgorithmEnum | undefined;
    public sequence?: string;
    public constructor(keyId?: any, plainText?: any) { 
        this['key_id'] = keyId;
        this['plain_text'] = plainText;
    }
    public withKeyId(keyId: string): EncryptDataRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withPlainText(plainText: string): EncryptDataRequestBody {
        this['plain_text'] = plainText;
        return this;
    }
    public set plainText(plainText: string | undefined) {
        this['plain_text'] = plainText;
    }
    public get plainText() {
        return this['plain_text'];
    }
    public withEncryptionAlgorithm(encryptionAlgorithm: EncryptDataRequestBodyEncryptionAlgorithmEnum): EncryptDataRequestBody {
        this['encryption_algorithm'] = encryptionAlgorithm;
        return this;
    }
    public set encryptionAlgorithm(encryptionAlgorithm: EncryptDataRequestBodyEncryptionAlgorithmEnum | undefined) {
        this['encryption_algorithm'] = encryptionAlgorithm;
    }
    public get encryptionAlgorithm() {
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
