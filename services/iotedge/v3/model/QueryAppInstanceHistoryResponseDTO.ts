

export class QueryAppInstanceHistoryResponseDTO {
    private 'app_id'?: string;
    private 'app_version'?: string;
    public version?: string;
    public values?: object;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): QueryAppInstanceHistoryResponseDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppVersion(appVersion: string): QueryAppInstanceHistoryResponseDTO {
        this['app_version'] = appVersion;
        return this;
    }
    public set appVersion(appVersion: string  | undefined) {
        this['app_version'] = appVersion;
    }
    public get appVersion(): string | undefined {
        return this['app_version'];
    }
    public withVersion(version: string): QueryAppInstanceHistoryResponseDTO {
        this['version'] = version;
        return this;
    }
    public withValues(values: object): QueryAppInstanceHistoryResponseDTO {
        this['values'] = values;
        return this;
    }
    public withUpdateTime(updateTime: string): QueryAppInstanceHistoryResponseDTO {
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