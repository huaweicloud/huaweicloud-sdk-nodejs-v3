

export class AccessKeyInfo {
    private 'access_key_id'?: string;
    private 'key_name'?: string;
    private 'access_key'?: string;
    private 'app_name'?: string;
    public status?: string;
    private 'create_time'?: number;
    private 'download_time'?: number;
    private 'is_downloaded'?: boolean;
    private 'is_imported'?: boolean;
    public constructor(accessKeyId?: string, keyName?: string, accessKey?: string, appName?: string, status?: string, createTime?: number, isDownloaded?: boolean, isImported?: boolean) { 
        this['access_key_id'] = accessKeyId;
        this['key_name'] = keyName;
        this['access_key'] = accessKey;
        this['app_name'] = appName;
        this['status'] = status;
        this['create_time'] = createTime;
        this['is_downloaded'] = isDownloaded;
        this['is_imported'] = isImported;
    }
    public withAccessKeyId(accessKeyId: string): AccessKeyInfo {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withKeyName(keyName: string): AccessKeyInfo {
        this['key_name'] = keyName;
        return this;
    }
    public set keyName(keyName: string  | undefined) {
        this['key_name'] = keyName;
    }
    public get keyName(): string | undefined {
        return this['key_name'];
    }
    public withAccessKey(accessKey: string): AccessKeyInfo {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
    public withAppName(appName: string): AccessKeyInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withStatus(status: string): AccessKeyInfo {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: number): AccessKeyInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDownloadTime(downloadTime: number): AccessKeyInfo {
        this['download_time'] = downloadTime;
        return this;
    }
    public set downloadTime(downloadTime: number  | undefined) {
        this['download_time'] = downloadTime;
    }
    public get downloadTime(): number | undefined {
        return this['download_time'];
    }
    public withIsDownloaded(isDownloaded: boolean): AccessKeyInfo {
        this['is_downloaded'] = isDownloaded;
        return this;
    }
    public set isDownloaded(isDownloaded: boolean  | undefined) {
        this['is_downloaded'] = isDownloaded;
    }
    public get isDownloaded(): boolean | undefined {
        return this['is_downloaded'];
    }
    public withIsImported(isImported: boolean): AccessKeyInfo {
        this['is_imported'] = isImported;
        return this;
    }
    public set isImported(isImported: boolean  | undefined) {
        this['is_imported'] = isImported;
    }
    public get isImported(): boolean | undefined {
        return this['is_imported'];
    }
}