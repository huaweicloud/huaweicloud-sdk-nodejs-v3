

export class AppQuotaAppInfo {
    private 'app_id'?: string;
    public name?: string;
    public status?: number;
    private 'app_key'?: string;
    private 'related_domain_id'?: string;
    private 'related_project_id'?: string;
    public remark?: string;
    private 'register_time'?: Date;
    private 'update_time'?: Date;
    private 'app_quota_id'?: string;
    private 'app_quota_name'?: string;
    private 'bound_time'?: Date;
    public constructor() { 
    }
    public withAppId(appId: string): AppQuotaAppInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withName(name: string): AppQuotaAppInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: number): AppQuotaAppInfo {
        this['status'] = status;
        return this;
    }
    public withAppKey(appKey: string): AppQuotaAppInfo {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withRelatedDomainId(relatedDomainId: string): AppQuotaAppInfo {
        this['related_domain_id'] = relatedDomainId;
        return this;
    }
    public set relatedDomainId(relatedDomainId: string  | undefined) {
        this['related_domain_id'] = relatedDomainId;
    }
    public get relatedDomainId(): string | undefined {
        return this['related_domain_id'];
    }
    public withRelatedProjectId(relatedProjectId: string): AppQuotaAppInfo {
        this['related_project_id'] = relatedProjectId;
        return this;
    }
    public set relatedProjectId(relatedProjectId: string  | undefined) {
        this['related_project_id'] = relatedProjectId;
    }
    public get relatedProjectId(): string | undefined {
        return this['related_project_id'];
    }
    public withRemark(remark: string): AppQuotaAppInfo {
        this['remark'] = remark;
        return this;
    }
    public withRegisterTime(registerTime: Date): AppQuotaAppInfo {
        this['register_time'] = registerTime;
        return this;
    }
    public set registerTime(registerTime: Date  | undefined) {
        this['register_time'] = registerTime;
    }
    public get registerTime(): Date | undefined {
        return this['register_time'];
    }
    public withUpdateTime(updateTime: Date): AppQuotaAppInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withAppQuotaId(appQuotaId: string): AppQuotaAppInfo {
        this['app_quota_id'] = appQuotaId;
        return this;
    }
    public set appQuotaId(appQuotaId: string  | undefined) {
        this['app_quota_id'] = appQuotaId;
    }
    public get appQuotaId(): string | undefined {
        return this['app_quota_id'];
    }
    public withAppQuotaName(appQuotaName: string): AppQuotaAppInfo {
        this['app_quota_name'] = appQuotaName;
        return this;
    }
    public set appQuotaName(appQuotaName: string  | undefined) {
        this['app_quota_name'] = appQuotaName;
    }
    public get appQuotaName(): string | undefined {
        return this['app_quota_name'];
    }
    public withBoundTime(boundTime: Date): AppQuotaAppInfo {
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