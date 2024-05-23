

export class IflytekSpark {
    private 'app_id'?: string;
    private 'app_key'?: string;
    private 'api_secret'?: string;
    private 'is_production'?: boolean;
    public constructor() { 
    }
    public withAppId(appId: string): IflytekSpark {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppKey(appKey: string): IflytekSpark {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withApiSecret(apiSecret: string): IflytekSpark {
        this['api_secret'] = apiSecret;
        return this;
    }
    public set apiSecret(apiSecret: string  | undefined) {
        this['api_secret'] = apiSecret;
    }
    public get apiSecret(): string | undefined {
        return this['api_secret'];
    }
    public withIsProduction(isProduction: boolean): IflytekSpark {
        this['is_production'] = isProduction;
        return this;
    }
    public set isProduction(isProduction: boolean  | undefined) {
        this['is_production'] = isProduction;
    }
    public get isProduction(): boolean | undefined {
        return this['is_production'];
    }
}