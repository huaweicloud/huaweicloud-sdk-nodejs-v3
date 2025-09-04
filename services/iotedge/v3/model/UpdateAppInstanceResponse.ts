
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAppInstanceResponse extends SdkResponse {
    public id?: string;
    public namespace?: string;
    public version?: string;
    private 'app_id'?: string;
    private 'app_version'?: string;
    public status?: string;
    private 'status_description'?: string;
    public values?: object;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdateAppInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): UpdateAppInstanceResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withVersion(version: string): UpdateAppInstanceResponse {
        this['version'] = version;
        return this;
    }
    public withAppId(appId: string): UpdateAppInstanceResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppVersion(appVersion: string): UpdateAppInstanceResponse {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withStatus(status: string): UpdateAppInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withStatusDescription(statusDescription: string): UpdateAppInstanceResponse {
        this['status_description'] = statusDescription;
        return this;
    }
    public set statusDescription(statusDescription: string  | undefined) {
        this['status_description'] = statusDescription;
    }
    public get statusDescription(): string | undefined {
        return this['status_description'];
    }
    public withValues(values: object): UpdateAppInstanceResponse {
        this['values'] = values;
        return this;
    }
    public withCreateTime(createTime: string): UpdateAppInstanceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): UpdateAppInstanceResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}