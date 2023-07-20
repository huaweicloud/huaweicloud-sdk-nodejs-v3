
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppResponse extends SdkResponse {
    private 'app_key'?: string;
    private 'app_name'?: string;
    public id?: string;
    public constructor() { 
        super();
    }
    public withAppKey(appKey: string): UpdateAppResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withAppName(appName: string): UpdateAppResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): UpdateAppResponse {
        this['id'] = id;
        return this;
    }
}