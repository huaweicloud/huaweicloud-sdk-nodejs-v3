

export class DeleteAppQuotaRequest {
    private 'instance_id'?: string;
    private 'app_quota_id'?: string;
    public constructor(instanceId?: string, appQuotaId?: string) { 
        this['instance_id'] = instanceId;
        this['app_quota_id'] = appQuotaId;
    }
    public withInstanceId(instanceId: string): DeleteAppQuotaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAppQuotaId(appQuotaId: string): DeleteAppQuotaRequest {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
}