

export class VerifyMacRequestBody {
    private 'key_id'?: string;
    private 'mac_algorithm'?: VerifyMacRequestBodyMacAlgorithmEnum | string;
    public message?: string;
    public mac?: string;
    public constructor(keyId?: string, macAlgorithm?: string, message?: string, mac?: string) { 
        this['key_id'] = keyId;
        this['mac_algorithm'] = macAlgorithm;
        this['message'] = message;
        this['mac'] = mac;
    }
    public withKeyId(keyId: string): VerifyMacRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withMacAlgorithm(macAlgorithm: VerifyMacRequestBodyMacAlgorithmEnum | string): VerifyMacRequestBody {
        this['mac_algorithm'] = macAlgorithm;
        return this;
    }
    public set macAlgorithm(macAlgorithm: VerifyMacRequestBodyMacAlgorithmEnum | string  | undefined) {
        this['mac_algorithm'] = macAlgorithm;
    }
    public get macAlgorithm(): VerifyMacRequestBodyMacAlgorithmEnum | string | undefined {
        return this['mac_algorithm'];
    }
    public withMessage(message: string): VerifyMacRequestBody {
        this['message'] = message;
        return this;
    }
    public withMac(mac: string): VerifyMacRequestBody {
        this['mac'] = mac;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VerifyMacRequestBodyMacAlgorithmEnum {
    HMAC_SHA_256 = 'HMAC_SHA_256',
    HMAC_SHA_384 = 'HMAC_SHA_384',
    HMAC_SHA_512 = 'HMAC_SHA_512',
    HMAC_SM3 = 'HMAC_SM3'
}
