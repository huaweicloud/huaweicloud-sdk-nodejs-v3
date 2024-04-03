

export class GenerateMacRequestBody {
    private 'key_id'?: string;
    private 'mac_algorithm'?: GenerateMacRequestBodyMacAlgorithmEnum | string;
    public message?: string;
    public constructor(keyId?: string, macAlgorithm?: string, message?: string) { 
        this['key_id'] = keyId;
        this['mac_algorithm'] = macAlgorithm;
        this['message'] = message;
    }
    public withKeyId(keyId: string): GenerateMacRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withMacAlgorithm(macAlgorithm: GenerateMacRequestBodyMacAlgorithmEnum | string): GenerateMacRequestBody {
        this['mac_algorithm'] = macAlgorithm;
        return this;
    }
    public set macAlgorithm(macAlgorithm: GenerateMacRequestBodyMacAlgorithmEnum | string  | undefined) {
        this['mac_algorithm'] = macAlgorithm;
    }
    public get macAlgorithm(): GenerateMacRequestBodyMacAlgorithmEnum | string | undefined {
        return this['mac_algorithm'];
    }
    public withMessage(message: string): GenerateMacRequestBody {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GenerateMacRequestBodyMacAlgorithmEnum {
    HMAC_SHA_256 = 'HMAC_SHA_256',
    HMAC_SHA_384 = 'HMAC_SHA_384',
    HMAC_SHA_512 = 'HMAC_SHA_512',
    HMAC_SM3 = 'HMAC_SM3'
}
