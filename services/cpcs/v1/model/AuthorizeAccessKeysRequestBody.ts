

export class AuthorizeAccessKeysRequestBody {
    private 'app_id'?: string;
    private 'access_key_ids'?: Array<string>;
    public constructor(appId?: string, accessKeyIds?: Array<string>) { 
        this['app_id'] = appId;
        this['access_key_ids'] = accessKeyIds;
    }
    public withAppId(appId: string): AuthorizeAccessKeysRequestBody {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAccessKeyIds(accessKeyIds: Array<string>): AuthorizeAccessKeysRequestBody {
        this['access_key_ids'] = accessKeyIds;
        return this;
    }
    public set accessKeyIds(accessKeyIds: Array<string>  | undefined) {
        this['access_key_ids'] = accessKeyIds;
    }
    public get accessKeyIds(): Array<string> | undefined {
        return this['access_key_ids'];
    }
}