

export class QueryAppVersionResponseDTO {
    private 'app_id'?: string;
    public version?: string;
    public values?: object;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): QueryAppVersionResponseDTO {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withVersion(version: string): QueryAppVersionResponseDTO {
        this['version'] = version;
        return this;
    }
    public withValues(values: object): QueryAppVersionResponseDTO {
        this['values'] = values;
        return this;
    }
    public withCreateTime(createTime: string): QueryAppVersionResponseDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryAppVersionResponseDTO {
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