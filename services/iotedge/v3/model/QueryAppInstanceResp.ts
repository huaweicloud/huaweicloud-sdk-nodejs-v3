

export class QueryAppInstanceResp {
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
    }
    public withId(id: string): QueryAppInstanceResp {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): QueryAppInstanceResp {
        this['namespace'] = namespace;
        return this;
    }
    public withVersion(version: string): QueryAppInstanceResp {
        this['version'] = version;
        return this;
    }
    public withAppId(appId: string): QueryAppInstanceResp {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppVersion(appVersion: string): QueryAppInstanceResp {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withStatus(status: string): QueryAppInstanceResp {
        this['status'] = status;
        return this;
    }
    public withStatusDescription(statusDescription: string): QueryAppInstanceResp {
        this['status_description'] = statusDescription;
        return this;
    }
    public set statusDescription(statusDescription: string  | undefined) {
        this['status_description'] = statusDescription;
    }
    public get statusDescription(): string | undefined {
        return this['status_description'];
    }
    public withValues(values: object): QueryAppInstanceResp {
        this['values'] = values;
        return this;
    }
    public withCreateTime(createTime: string): QueryAppInstanceResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryAppInstanceResp {
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