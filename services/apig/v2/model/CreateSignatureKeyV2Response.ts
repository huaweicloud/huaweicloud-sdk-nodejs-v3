import { BaseSignature } from './BaseSignature';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSignatureKeyV2Response extends SdkResponse {
    public name?: string;
    private 'sign_type'?: CreateSignatureKeyV2ResponseSignTypeEnum | string;
    private 'sign_key'?: string;
    private 'sign_secret'?: string;
    private 'sign_algorithm'?: CreateSignatureKeyV2ResponseSignAlgorithmEnum | string;
    private 'update_time'?: Date;
    private 'create_time'?: Date;
    public id?: string;
    public constructor(name?: string) { 
        super();
        this['name'] = name;
    }
    public withName(name: string): CreateSignatureKeyV2Response {
        this['name'] = name;
        return this;
    }
    public withSignType(signType: CreateSignatureKeyV2ResponseSignTypeEnum | string): CreateSignatureKeyV2Response {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: CreateSignatureKeyV2ResponseSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): CreateSignatureKeyV2ResponseSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
    public withSignKey(signKey: string): CreateSignatureKeyV2Response {
        this['sign_key'] = signKey;
        return this;
    }
    public set signKey(signKey: string  | undefined) {
        this['sign_key'] = signKey;
    }
    public get signKey(): string | undefined {
        return this['sign_key'];
    }
    public withSignSecret(signSecret: string): CreateSignatureKeyV2Response {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withSignAlgorithm(signAlgorithm: CreateSignatureKeyV2ResponseSignAlgorithmEnum | string): CreateSignatureKeyV2Response {
        this['sign_algorithm'] = signAlgorithm;
        return this;
    }
    public set signAlgorithm(signAlgorithm: CreateSignatureKeyV2ResponseSignAlgorithmEnum | string  | undefined) {
        this['sign_algorithm'] = signAlgorithm;
    }
    public get signAlgorithm(): CreateSignatureKeyV2ResponseSignAlgorithmEnum | string | undefined {
        return this['sign_algorithm'];
    }
    public withUpdateTime(updateTime: Date): CreateSignatureKeyV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: Date): CreateSignatureKeyV2Response {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withId(id: string): CreateSignatureKeyV2Response {
        this['id'] = id;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSignatureKeyV2ResponseSignTypeEnum {
    HMAC = 'hmac',
    BASIC = 'basic',
    PUBLIC_KEY = 'public_key',
    AES = 'aes'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSignatureKeyV2ResponseSignAlgorithmEnum {
    AES_128_CFB = 'aes-128-cfb',
    AES_256_CFB = 'aes-256-cfb'
}
