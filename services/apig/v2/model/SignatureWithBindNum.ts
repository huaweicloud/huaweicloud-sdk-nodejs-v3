import { Signature } from './Signature';


export class SignatureWithBindNum {
    public name?: string;
    private 'sign_type'?: SignatureWithBindNumSignTypeEnum | string;
    private 'sign_key'?: string;
    private 'sign_secret'?: string;
    private 'sign_algorithm'?: SignatureWithBindNumSignAlgorithmEnum | string;
    private 'update_time'?: Date;
    private 'create_time'?: Date;
    public id?: string;
    private 'bind_num'?: number;
    private 'ldapi_bind_num'?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): SignatureWithBindNum {
        this['name'] = name;
        return this;
    }
    public withSignType(signType: SignatureWithBindNumSignTypeEnum | string): SignatureWithBindNum {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: SignatureWithBindNumSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): SignatureWithBindNumSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
    public withSignKey(signKey: string): SignatureWithBindNum {
        this['sign_key'] = signKey;
        return this;
    }
    public set signKey(signKey: string  | undefined) {
        this['sign_key'] = signKey;
    }
    public get signKey(): string | undefined {
        return this['sign_key'];
    }
    public withSignSecret(signSecret: string): SignatureWithBindNum {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withSignAlgorithm(signAlgorithm: SignatureWithBindNumSignAlgorithmEnum | string): SignatureWithBindNum {
        this['sign_algorithm'] = signAlgorithm;
        return this;
    }
    public set signAlgorithm(signAlgorithm: SignatureWithBindNumSignAlgorithmEnum | string  | undefined) {
        this['sign_algorithm'] = signAlgorithm;
    }
    public get signAlgorithm(): SignatureWithBindNumSignAlgorithmEnum | string | undefined {
        return this['sign_algorithm'];
    }
    public withUpdateTime(updateTime: Date): SignatureWithBindNum {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: Date): SignatureWithBindNum {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): SignatureWithBindNum {
        this['id'] = id;
        return this;
    }
    public withBindNum(bindNum: number): SignatureWithBindNum {
        this['bind_num'] = bindNum;
        return this;
    }
    public set bindNum(bindNum: number  | undefined) {
        this['bind_num'] = bindNum;
    }
    public get bindNum(): number | undefined {
        return this['bind_num'];
    }
    public withLdapiBindNum(ldapiBindNum: number): SignatureWithBindNum {
        this['ldapi_bind_num'] = ldapiBindNum;
        return this;
    }
    public set ldapiBindNum(ldapiBindNum: number  | undefined) {
        this['ldapi_bind_num'] = ldapiBindNum;
    }
    public get ldapiBindNum(): number | undefined {
        return this['ldapi_bind_num'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SignatureWithBindNumSignTypeEnum {
    HMAC = 'hmac',
    BASIC = 'basic',
    PUBLIC_KEY = 'public_key',
    AES = 'aes'
}
/**
    * @export
    * @enum {string}
    */
export enum SignatureWithBindNumSignAlgorithmEnum {
    AES_128_CFB = 'aes-128-cfb',
    AES_256_CFB = 'aes-256-cfb'
}
