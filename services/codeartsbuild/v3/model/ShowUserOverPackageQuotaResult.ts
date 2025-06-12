

export class ShowUserOverPackageQuotaResult {
    private 'is_over_quota'?: boolean;
    private 'build_quota'?: string;
    private 'used_quota'?: string;
    public constructor() { 
    }
    public withIsOverQuota(isOverQuota: boolean): ShowUserOverPackageQuotaResult {
        this['is_over_quota'] = isOverQuota;
        return this;
    }
    public set isOverQuota(isOverQuota: boolean  | undefined) {
        this['is_over_quota'] = isOverQuota;
    }
    public get isOverQuota(): boolean | undefined {
        return this['is_over_quota'];
    }
    public withBuildQuota(buildQuota: string): ShowUserOverPackageQuotaResult {
        this['build_quota'] = buildQuota;
        return this;
    }
    public set buildQuota(buildQuota: string  | undefined) {
        this['build_quota'] = buildQuota;
    }
    public get buildQuota(): string | undefined {
        return this['build_quota'];
    }
    public withUsedQuota(usedQuota: string): ShowUserOverPackageQuotaResult {
        this['used_quota'] = usedQuota;
        return this;
    }
    public set usedQuota(usedQuota: string  | undefined) {
        this['used_quota'] = usedQuota;
    }
    public get usedQuota(): string | undefined {
        return this['used_quota'];
    }
}