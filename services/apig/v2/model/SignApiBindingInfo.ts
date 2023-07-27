import { SignApiBindingBase } from './SignApiBindingBase';


export class SignApiBindingInfo {
    private 'publish_id'?: string;
    private 'api_id'?: string;
    private 'group_name'?: string;
    private 'binding_time'?: Date;
    private 'env_id'?: string;
    private 'env_name'?: string;
    private 'api_type'?: number;
    private 'api_name'?: string;
    public id?: string;
    private 'api_remark'?: string;
    private 'sign_id'?: string;
    private 'sign_name'?: string;
    private 'sign_key'?: string;
    private 'sign_secret'?: string;
    private 'sign_type'?: SignApiBindingInfoSignTypeEnum | string;
    public constructor() { 
    }
    public withPublishId(publishId: string): SignApiBindingInfo {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withApiId(apiId: string): SignApiBindingInfo {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withGroupName(groupName: string): SignApiBindingInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withBindingTime(bindingTime: Date): SignApiBindingInfo {
        this['binding_time'] = bindingTime;
        return this;
    }
    public set bindingTime(bindingTime: Date  | undefined) {
        this['binding_time'] = bindingTime;
    }
    public get bindingTime(): Date | undefined {
        return this['binding_time'];
    }
    public withEnvId(envId: string): SignApiBindingInfo {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withEnvName(envName: string): SignApiBindingInfo {
        this['env_name'] = envName;
        return this;
    }
    public set envName(envName: string  | undefined) {
        this['env_name'] = envName;
    }
    public get envName(): string | undefined {
        return this['env_name'];
    }
    public withApiType(apiType: number): SignApiBindingInfo {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: number  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): number | undefined {
        return this['api_type'];
    }
    public withApiName(apiName: string): SignApiBindingInfo {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withId(id: string): SignApiBindingInfo {
        this['id'] = id;
        return this;
    }
    public withApiRemark(apiRemark: string): SignApiBindingInfo {
        this['api_remark'] = apiRemark;
        return this;
    }
    public set apiRemark(apiRemark: string  | undefined) {
        this['api_remark'] = apiRemark;
    }
    public get apiRemark(): string | undefined {
        return this['api_remark'];
    }
    public withSignId(signId: string): SignApiBindingInfo {
        this['sign_id'] = signId;
        return this;
    }
    public set signId(signId: string  | undefined) {
        this['sign_id'] = signId;
    }
    public get signId(): string | undefined {
        return this['sign_id'];
    }
    public withSignName(signName: string): SignApiBindingInfo {
        this['sign_name'] = signName;
        return this;
    }
    public set signName(signName: string  | undefined) {
        this['sign_name'] = signName;
    }
    public get signName(): string | undefined {
        return this['sign_name'];
    }
    public withSignKey(signKey: string): SignApiBindingInfo {
        this['sign_key'] = signKey;
        return this;
    }
    public set signKey(signKey: string  | undefined) {
        this['sign_key'] = signKey;
    }
    public get signKey(): string | undefined {
        return this['sign_key'];
    }
    public withSignSecret(signSecret: string): SignApiBindingInfo {
        this['sign_secret'] = signSecret;
        return this;
    }
    public set signSecret(signSecret: string  | undefined) {
        this['sign_secret'] = signSecret;
    }
    public get signSecret(): string | undefined {
        return this['sign_secret'];
    }
    public withSignType(signType: SignApiBindingInfoSignTypeEnum | string): SignApiBindingInfo {
        this['sign_type'] = signType;
        return this;
    }
    public set signType(signType: SignApiBindingInfoSignTypeEnum | string  | undefined) {
        this['sign_type'] = signType;
    }
    public get signType(): SignApiBindingInfoSignTypeEnum | string | undefined {
        return this['sign_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SignApiBindingInfoSignTypeEnum {
    HMAC = 'hmac',
    BASIC = 'basic',
    PUBLIC_KEY = 'public_key',
    AES = 'aes'
}
