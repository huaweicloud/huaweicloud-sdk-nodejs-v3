

export class DeAuthorizeAccessKeysRequestBody {
    private 'access_key_ids'?: Array<string>;
    private 'app_id'?: string;
    public constructor(accessKeyIds?: Array<string>, appId?: string) { 
        this['access_key_ids'] = accessKeyIds;
        this['app_id'] = appId;
    }
    public withAccessKeyIds(accessKeyIds: Array<string>): DeAuthorizeAccessKeysRequestBody {
        this['access_key_ids'] = accessKeyIds;
        return this;
    }
    public set accessKeyIds(accessKeyIds: Array<string>  | undefined) {
        this['access_key_ids'] = accessKeyIds;
    }
    public get accessKeyIds(): Array<string> | undefined {
        return this['access_key_ids'];
    }
    public withAppId(appId: string): DeAuthorizeAccessKeysRequestBody {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}