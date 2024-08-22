
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddAppIdResponse extends SdkResponse {
    private 'app_name'?: string;
    private 'app_id'?: string;
    private 'app_key'?: string;
    public description?: string;
    private 'create_time'?: string;
    private 'last_update_time'?: string;
    public status?: number;
    public constructor() { 
        super();
    }
    public withAppName(appName: string): AddAppIdResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppId(appId: string): AddAppIdResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppKey(appKey: string): AddAppIdResponse {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withDescription(description: string): AddAppIdResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: string): AddAppIdResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): AddAppIdResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withStatus(status: number): AddAppIdResponse {
        this['status'] = status;
        return this;
    }
}