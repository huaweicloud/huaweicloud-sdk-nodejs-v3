import { AppBaseInfo } from './AppBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDetailsOfAppV2Response extends SdkResponse {
    public id?: string;
    public name?: string;
    public remark?: string;
    public creator?: ShowDetailsOfAppV2ResponseCreatorEnum | string;
    private 'update_time'?: Date;
    private 'app_key'?: string;
    private 'app_secret'?: string;
    private 'register_time'?: Date;
    public status?: ShowDetailsOfAppV2ResponseStatusEnum | number;
    private 'app_type'?: ShowDetailsOfAppV2ResponseAppTypeEnum | string;
    private 'roma_app_type'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowDetailsOfAppV2Response {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDetailsOfAppV2Response {
        this['name'] = name;
        return this;
    }
    public withRemark(remark: string): ShowDetailsOfAppV2Response {
        this['remark'] = remark;
        return this;
    }
    public withCreator(creator: ShowDetailsOfAppV2ResponseCreatorEnum | string): ShowDetailsOfAppV2Response {
        this['creator'] = creator;
        return this;
    }
    public withUpdateTime(updateTime: Date): ShowDetailsOfAppV2Response {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAppKey(appKey: string): ShowDetailsOfAppV2Response {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): ShowDetailsOfAppV2Response {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRegisterTime(registerTime: Date): ShowDetailsOfAppV2Response {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withStatus(status: ShowDetailsOfAppV2ResponseStatusEnum | number): ShowDetailsOfAppV2Response {
        this['status'] = status;
        return this;
    }
    public withAppType(appType: ShowDetailsOfAppV2ResponseAppTypeEnum | string): ShowDetailsOfAppV2Response {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ShowDetailsOfAppV2ResponseAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ShowDetailsOfAppV2ResponseAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withRomaAppType(romaAppType: string): ShowDetailsOfAppV2Response {
        this['roma_app_type'] = romaAppType;
        return this;
    }
    public set romaAppType(romaAppType: string  | undefined) {
        this['roma_app_type'] = romaAppType;
    }
    public get romaAppType(): string | undefined {
        return this['roma_app_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfAppV2ResponseCreatorEnum {
    USER = 'USER',
    MARKET = 'MARKET'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfAppV2ResponseStatusEnum {
    NUMBER_1 = 1
}
/**
    * @export
    * @enum {string}
    */
export enum ShowDetailsOfAppV2ResponseAppTypeEnum {
    APIG = 'apig',
    ROMA = 'roma'
}
