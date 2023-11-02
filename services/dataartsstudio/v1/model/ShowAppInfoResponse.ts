
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppInfoResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'app_key'?: string;
    private 'app_secret'?: string;
    private 'register_time'?: number;
    private 'update_time'?: number;
    private 'create_user'?: string;
    private 'update_user'?: string;
    private 'app_type'?: ShowAppInfoResponseAppTypeEnum | string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAppInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAppInfoResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowAppInfoResponse {
        this['description'] = description;
        return this;
    }
    public withAppKey(appKey: string): ShowAppInfoResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppSecret(appSecret: string): ShowAppInfoResponse {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string  | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret(): string | undefined {
        return this['app_secret'];
    }
    public withRegisterTime(registerTime: number): ShowAppInfoResponse {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: number  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): number | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: number): ShowAppInfoResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateUser(createUser: string): ShowAppInfoResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateUser(updateUser: string): ShowAppInfoResponse {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withAppType(appType: ShowAppInfoResponseAppTypeEnum | string): ShowAppInfoResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ShowAppInfoResponseAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ShowAppInfoResponseAppTypeEnum | string | undefined {
        return this['app_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAppInfoResponseAppTypeEnum {
    APIG = 'APIG',
    IAM = 'IAM',
    APIGW = 'APIGW',
    DLM = 'DLM',
    ROMA_APIC = 'ROMA_APIC'
}
