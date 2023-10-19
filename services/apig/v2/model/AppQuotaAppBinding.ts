

export class AppQuotaAppBinding {
    private 'app_quota_id'?: string;
    private 'app_id'?: string;
    private 'bound_time'?: Date;
    public constructor() { 
    }
    public withAppQuotaId(appQuotaId: string): AppQuotaAppBinding {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
    public withAppId(appId: string): AppQuotaAppBinding {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBoundTime(boundTime: Date): AppQuotaAppBinding {
        this['bound_time'] = boundTime;
        return this;
    }
    public set boundTime(boundTime: Date  | undefined) {
        this['bound_time'] = boundTime;
    }
    public get boundTime(): Date | undefined {
        return this['bound_time'];
    }
}