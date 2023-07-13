

export class VerifyRequestBody {
    private 'key_id': string | undefined;
    public message: string;
    public signature: string;
    private 'signing_algorithm': VerifyRequestBodySigningAlgorithmEnum | undefined;
    private 'message_type'?: VerifyRequestBodyMessageTypeEnum | undefined;
    public sequence?: string;
    public constructor(keyId?: any, message?: any, signature?: any, signingAlgorithm?: any) { 
        this['key_id'] = keyId;
        this['message'] = message;
        this['signature'] = signature;
        this['signing_algorithm'] = signingAlgorithm;
    }
    public withKeyId(keyId: string): VerifyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withMessage(message: string): VerifyRequestBody {
        this['message'] = message;
        return this;
    }
    public withSignature(signature: string): VerifyRequestBody {
        this['signature'] = signature;
        return this;
    }
    public withSigningAlgorithm(signingAlgorithm: VerifyRequestBodySigningAlgorithmEnum): VerifyRequestBody {
        this['signing_algorithm'] = signingAlgorithm;
        return this;
    }
    public set signingAlgorithm(signingAlgorithm: VerifyRequestBodySigningAlgorithmEnum | undefined) {
        this['signing_algorithm'] = signingAlgorithm;
    }
    public get signingAlgorithm() {
        return this['signing_algorithm'];
    }
    public withMessageType(messageType: VerifyRequestBodyMessageTypeEnum): VerifyRequestBody {
        this['message_type'] = messageType;
        return this;
    }
    public set messageType(messageType: VerifyRequestBodyMessageTypeEnum | undefined) {
        this['message_type'] = messageType;
    }
    public get messageType() {
        return this['message_type'];
    }
    public withSequence(sequence: string): VerifyRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VerifyRequestBodySigningAlgorithmEnum {
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
export enum VerifyRequestBodyMessageTypeEnum {
    DIGEST = 'DIGEST',
    RAW = 'RAW'
}
