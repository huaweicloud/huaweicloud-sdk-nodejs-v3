

export class DisassociateAppQuotaWithAppRequest {
    private 'instance_id'?: string;
    private 'app_quota_id'?: string;
    private 'app_id'?: string;
    public constructor(instanceId?: string, appQuotaId?: string, appId?: string) { 
        this['instance_id'] = instanceId;
        this['app_quota_id'] = appQuotaId;
        this['app_id'] = appId;
    }
    public withInstanceId(instanceId: string): DisassociateAppQuotaWithAppRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppQuotaId(appQuotaId: string): DisassociateAppQuotaWithAppRequest {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
    public withAppId(appId: string): DisassociateAppQuotaWithAppRequest {
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