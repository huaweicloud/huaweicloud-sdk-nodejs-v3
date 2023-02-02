

export class GetParametersForImportRequestBody {
    private 'key_id': string | undefined;
    private 'wrapping_algorithm': GetParametersForImportRequestBodyWrappingAlgorithmEnum | undefined;
    public sequence?: string;
    public constructor(keyId?: any, wrappingAlgorithm?: any) { 
        this['key_id'] = keyId;
        this['wrapping_algorithm'] = wrappingAlgorithm;
    }
    public withKeyId(keyId: string): GetParametersForImportRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId() {
        return this['key_id'];
    }
    public withWrappingAlgorithm(wrappingAlgorithm: GetParametersForImportRequestBodyWrappingAlgorithmEnum): GetParametersForImportRequestBody {
        this['wrapping_algorithm'] = wrappingAlgorithm;
        return this;
    }
    public set wrappingAlgorithm(wrappingAlgorithm: GetParametersForImportRequestBodyWrappingAlgorithmEnum | undefined) {
        this['wrapping_algorithm'] = wrappingAlgorithm;
    }
    public get wrappingAlgorithm() {
        return this['wrapping_algorithm'];
    }
    public withSequence(sequence: string): GetParametersForImportRequestBody {
        this['sequence'] = sequence;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetParametersForImportRequestBodyWrappingAlgorithmEnum {
    RSAES_OAEP_SHA_256 = 'RSAES_OAEP_SHA_256',
    SM2_ENCRYPT = 'SM2_ENCRYPT'
}
