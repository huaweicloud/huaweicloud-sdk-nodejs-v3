

export class SignRequestBody {
    private 'key_id'?: string;
    public message?: string;
    private 'signing_algorithm'?: SignRequestBodySigningAlgorithmEnum | string;
    private 'message_type'?: SignRequestBodyMessageTypeEnum | string;
    public sequence?: string;
    public constructor(keyId?: string, message?: string, signingAlgorithm?: string) { 
        this['key_id'] = keyId;
        this['message'] = message;
        this['signing_algorithm'] = signingAlgorithm;
    }
    public withKeyId(keyId: string): SignRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withMessage(message: string): SignRequestBody {
        this['message'] = message;
        return this;
    }
    public withSigningAlgorithm(signingAlgorithm: SignRequestBodySigningAlgorithmEnum | string): SignRequestBody {
        this['signing_algorithm'] = signingAlgorithm;
        return this;
    }
    public set signingAlgorithm(signingAlgorithm: SignRequestBodySigningAlgorithmEnum | string  | undefined) {
        this['signing_algorithm'] = signingAlgorithm;
    }
    public get signingAlgorithm(): SignRequestBodySigningAlgorithmEnum | string | undefined {
        return this['signing_algorithm'];
    }
    public withMessageType(messageType: SignRequestBodyMessageTypeEnum | string): SignRequestBody {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: SignRequestBodyMessageTypeEnum | string  | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType(): SignRequestBodyMessageTypeEnum | string | undefined {
        return this['message_type'];
    }
    public withSequence(sequence: string): SignRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SignRequestBodySigningAlgorithmEnum {
    RSASSA_PSS_SHA_256 = 'RSASSA_PSS_SHA_256',
    RSASSA_PSS_SHA_384 = 'RSASSA_PSS_SHA_384',
    RSASSA_PSS_SHA_512 = 'RSASSA_PSS_SHA_512',
    RSASSA_PKCS1_V1_5_SHA_256 = 'RSASSA_PKCS1_V1_5_SHA_256',
    RSASSA_PKCS1_V1_5_SHA_384 = 'RSASSA_PKCS1_V1_5_SHA_384',
    RSASSA_PKCS1_V1_5_SHA_512 = 'RSASSA_PKCS1_V1_5_SHA_512',
    ECDSA_SHA_256 = 'ECDSA_SHA_256',
    ECDSA_SHA_384 = 'ECDSA_SHA_384',
    ECDSA_SHA_512 = 'ECDSA_SHA_512',
    SM2DSA_SM3 = 'SM2DSA_SM3'
}
/**
    * @export
    * @enum {string}
    */
export enum SignRequestBodyMessageTypeEnum {
    DIGEST = 'DIGEST',
    RAW = 'RAW'
}
