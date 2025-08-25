

export class ShowClusterAccessKeyListResponseBodyResult {
    private 'access_key_id'?: string;
    public status?: string;
    private 'app_name'?: string;
    private 'access_key'?: string;
    private 'key_name'?: string;
    private 'create_time'?: number;
    public constructor(accessKeyId?: string, status?: string, appName?: string, accessKey?: string, keyName?: string, createTime?: number) { 
        this['access_key_id'] = accessKeyId;
        this['status'] = status;
        this['app_name'] = appName;
        this['access_key'] = accessKey;
        this['key_name'] = keyName;
        this['create_time'] = createTime;
    }
    public withAccessKeyId(accessKeyId: string): ShowClusterAccessKeyListResponseBodyResult {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withStatus(status: string): ShowClusterAccessKeyListResponseBodyResult {
        this['status'] = status;
        return this;
    }
    public withAppName(appName: string): ShowClusterAccessKeyListResponseBodyResult {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAccessKey(accessKey: string): ShowClusterAccessKeyListResponseBodyResult {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withKeyName(keyName: string): ShowClusterAccessKeyListResponseBodyResult {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withCreateTime(createTime: number): ShowClusterAccessKeyListResponseBodyResult {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}