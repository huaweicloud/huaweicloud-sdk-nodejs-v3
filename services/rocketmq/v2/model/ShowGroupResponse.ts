
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupResponse extends SdkResponse {
    public enabled?: boolean;
    public broadcast?: boolean;
    public brokers?: Array<string>;
    public name?: string;
    private 'retry_max_time'?: number;
    private 'app_id'?: string;
    private 'app_name'?: string;
    public permissions?: Array<string>;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowGroupResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withBroadcast(broadcast: boolean): ShowGroupResponse {
        this['broadcast'] = broadcast;
        return this;
    }
    public withBrokers(brokers: Array<string>): ShowGroupResponse {
        this['brokers'] = brokers;
        return this;
    }
    public withName(name: string): ShowGroupResponse {
        this['name'] = name;
        return this;
    }
    public withRetryMaxTime(retryMaxTime: number): ShowGroupResponse {
        this['retry_max_time'] = retryMaxTime;
        return this;
    }
    public set retryMaxTime(retryMaxTime: number  | undefined) {
        this['retry_max_time'] = retryMaxTime;
    }
    public get retryMaxTime(): number | undefined {
        return this['retry_max_time'];
    }
    public withAppId(appId: string): ShowGroupResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): ShowGroupResponse {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withPermissions(permissions: Array<string>): ShowGroupResponse {
        this['permissions'] = permissions;
        return this;
    }
}