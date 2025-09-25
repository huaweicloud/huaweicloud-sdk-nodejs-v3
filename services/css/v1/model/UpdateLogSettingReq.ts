

export class UpdateLogSettingReq {
    public agency?: string;
    private 'log_base_path'?: string;
    private 'log_bucket'?: string;
    private 'index_prefix'?: string;
    private 'keep_days'?: number;
    private 'target_cluster_id'?: string;
    private 'auto_enable'?: boolean;
    public period?: string;
    public constructor() { 
    }
    public withAgency(agency: string): UpdateLogSettingReq {
        this['agency'] = agency;
        return this;
    }
    public withLogBasePath(logBasePath: string): UpdateLogSettingReq {
        this['log_base_path'] = logBasePath;
        return this;
    }
    public set logBasePath(logBasePath: string  | undefined) {
        this['log_base_path'] = logBasePath;
    }
    public get logBasePath(): string | undefined {
        return this['log_base_path'];
    }
    public withLogBucket(logBucket: string): UpdateLogSettingReq {
        this['log_bucket'] = logBucket;
        return this;
    }
    public set logBucket(logBucket: string  | undefined) {
        this['log_bucket'] = logBucket;
    }
    public get logBucket(): string | undefined {
        return this['log_bucket'];
    }
    public withIndexPrefix(indexPrefix: string): UpdateLogSettingReq {
        this['index_prefix'] = indexPrefix;
        return this;
    }
    public set indexPrefix(indexPrefix: string  | undefined) {
        this['index_prefix'] = indexPrefix;
    }
    public get indexPrefix(): string | undefined {
        return this['index_prefix'];
    }
    public withKeepDays(keepDays: number): UpdateLogSettingReq {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withTargetClusterId(targetClusterId: string): UpdateLogSettingReq {
        this['target_cluster_id'] = targetClusterId;
        return this;
    }
    public set targetClusterId(targetClusterId: string  | undefined) {
        this['target_cluster_id'] = targetClusterId;
    }
    public get targetClusterId(): string | undefined {
        return this['target_cluster_id'];
    }
    public withAutoEnable(autoEnable: boolean): UpdateLogSettingReq {
        this['auto_enable'] = autoEnable;
        return this;
    }
    public set autoEnable(autoEnable: boolean  | undefined) {
        this['auto_enable'] = autoEnable;
    }
    public get autoEnable(): boolean | undefined {
        return this['auto_enable'];
    }
    public withPeriod(period: string): UpdateLogSettingReq {
        this['period'] = period;
        return this;
    }
}