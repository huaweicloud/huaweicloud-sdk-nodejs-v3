

export class ResourcePackageInfo {
    private 'resource_id'?: string;
    private 'engine_name'?: string;
    private 'used_quota'?: number;
    private 'total_quota'?: number;
    public status?: string;
    public constructor() { 
    }
    public withResourceId(resourceId: string): ResourcePackageInfo {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEngineName(engineName: string): ResourcePackageInfo {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withUsedQuota(usedQuota: number): ResourcePackageInfo {
        this['used_quota'] = usedQuota;
        return this;
    }
    public set usedQuota(usedQuota: number  | undefined) {
        this['used_quota'] = usedQuota;
    }
    public get usedQuota(): number | undefined {
        return this['used_quota'];
    }
    public withTotalQuota(totalQuota: number): ResourcePackageInfo {
        this['total_quota'] = totalQuota;
        return this;
    }
    public set totalQuota(totalQuota: number  | undefined) {
        this['total_quota'] = totalQuota;
    }
    public get totalQuota(): number | undefined {
        return this['total_quota'];
    }
    public withStatus(status: string): ResourcePackageInfo {
        this['status'] = status;
        return this;
    }
}