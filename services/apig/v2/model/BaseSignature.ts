

export class BaseSignature {
    public name?: string;
    private 'sign_type'?: BaseSignatureSignTypeEnum | string;
    private 'sign_key'?: string;
    private 'sign_secret'?: string;
    private 'sign_algorithm'?: BaseSignatureSignAlgorithmEnum | string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BaseSignature {
        this['name'] = name;
        return this;
    }
    public withSignType(signType: BaseSignatureSignTypeEnum | string): BaseSignature {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: BaseSignatureSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): BaseSignatureSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
    public withSignKey(signKey: string): BaseSignature {
        this['sign_key'] = signKey;
        return this;
    }
    public set signKey(signKey: string  | undefined) {
        this['sign_key'] = signKey;
    }
    public get signKey(): string | undefined {
        return this['sign_key'];
    }
    public withSignSecret(signSecret: string): BaseSignature {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withSignAlgorithm(signAlgorithm: BaseSignatureSignAlgorithmEnum | string): BaseSignature {
        this['sign_algorithm'] = signAlgorithm;
        return this;
    }
    public set signAlgorithm(signAlgorithm: BaseSignatureSignAlgorithmEnum | string  | undefined) {
        this['sign_algorithm'] = signAlgorithm;
    }
    public get signAlgorithm(): BaseSignatureSignAlgorithmEnum | string | undefined {
        return this['sign_algorithm'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BaseSignatureSignTypeEnum {
    HMAC = 'hmac',
    BASIC = 'basic',
    PUBLIC_KEY = 'public_key',
    AES = 'aes'
}
/**
    * @export
    * @enum {string}
    */
export enum BaseSignatureSignAlgorithmEnum {
    AES_128_CFB = 'aes-128-cfb',
    AES_256_CFB = 'aes-256-cfb'
}
