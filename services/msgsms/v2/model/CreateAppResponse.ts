
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAppResponse extends SdkResponse {
    private 'app_key'?: string | undefined;
    private 'app_name'?: string | undefined;
    public id?: string;
    private 'app_secret'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAppKey(appKey: string): CreateAppResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey() {
        return this['app_key'];
    }
    public withAppName(appName: string): CreateAppResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withId(id: string): CreateAppResponse {
        this['id'] = id;
        return this;
    }
    public withAppSecret(appSecret: string): CreateAppResponse {
        this['app_secret'] = appSecret;
        return this;
    }
    public set appSecret(appSecret: string | undefined) {
        this['app_secret'] = appSecret;
    }
    public get appSecret() {
        return this['app_secret'];
    }
}