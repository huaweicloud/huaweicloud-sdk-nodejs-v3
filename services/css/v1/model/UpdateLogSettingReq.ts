

export class UpdateLogSettingReq {
    public agency?: string;
    private 'log_base_path'?: string;
    private 'log_bucket'?: string;
    public constructor(agency?: string, logBasePath?: string, logBucket?: string) { 
        this['agency'] = agency;
        this['log_base_path'] = logBasePath;
        this['log_bucket'] = logBucket;
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
}