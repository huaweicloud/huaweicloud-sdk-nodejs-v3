
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddApplicationResponse extends SdkResponse {
    private 'app_id'?: string | undefined;
    private 'app_name'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'default_app'?: boolean | undefined;
    public constructor() { 
        super();
    }
    public withAppId(appId: string): AddApplicationResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withAppName(appName: string): AddApplicationResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string | undefined) {
        this['app_name'] = appName;
    }
    public get appName() {
        return this['app_name'];
    }
    public withCreateTime(createTime: string): AddApplicationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withDefaultApp(defaultApp: boolean): AddApplicationResponse {
        this['default_app'] = defaultApp;
        return this;
    }
    public set defaultApp(defaultApp: boolean | undefined) {
        this['default_app'] = defaultApp;
    }
    public get defaultApp() {
        return this['default_app'];
    }
}