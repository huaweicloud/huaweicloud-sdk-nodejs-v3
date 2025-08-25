

export class DeleteAccessKeyRequest {
    private 'access_key_id'?: string;
    private 'app_id'?: string;
    public constructor(accessKeyId?: string, appId?: string) { 
        this['access_key_id'] = accessKeyId;
        this['app_id'] = appId;
    }
    public withAccessKeyId(accessKeyId: string): DeleteAccessKeyRequest {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withAppId(appId: string): DeleteAccessKeyRequest {
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