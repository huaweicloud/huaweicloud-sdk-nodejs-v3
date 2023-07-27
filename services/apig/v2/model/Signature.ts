import { BaseSignature } from './BaseSignature';


export class Signature {
    public name?: string;
    private 'sign_type'?: SignatureSignTypeEnum | string;
    private 'sign_key'?: string;
    private 'sign_secret'?: string;
    private 'sign_algorithm'?: SignatureSignAlgorithmEnum | string;
    private 'update_time'?: Date;
    private 'create_time'?: Date;
    public id?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): Signature {
        this['name'] = name;
        return this;
    }
    public withSignType(signType: SignatureSignTypeEnum | string): Signature {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: SignatureSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): SignatureSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
    public withSignKey(signKey: string): Signature {
        this['sign_key'] = signKey;
        return this;
    }
    public set signKey(signKey: string  | undefined) {
        this['sign_key'] = signKey;
    }
    public get signKey(): string | undefined {
        return this['sign_key'];
    }
    public withSignSecret(signSecret: string): Signature {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withSignAlgorithm(signAlgorithm: SignatureSignAlgorithmEnum | string): Signature {
        this['sign_algorithm'] = signAlgorithm;
        return this;
    }
    public set signAlgorithm(signAlgorithm: SignatureSignAlgorithmEnum | string  | undefined) {
        this['sign_algorithm'] = signAlgorithm;
    }
    public get signAlgorithm(): SignatureSignAlgorithmEnum | string | undefined {
        return this['sign_algorithm'];
    }
    public withUpdateTime(updateTime: Date): Signature {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: Date): Signature {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): Signature {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SignatureSignTypeEnum {
    HMAC = 'hmac',
    BASIC = 'basic',
    PUBLIC_KEY = 'public_key',
    AES = 'aes'
}
/**
    * @export
    * @enum {string}
    */
export enum SignatureSignAlgorithmEnum {
    AES_128_CFB = 'aes-128-cfb',
    AES_256_CFB = 'aes-256-cfb'
}
