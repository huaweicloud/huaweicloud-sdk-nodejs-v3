

export class StartLogsReq {
    public agency?: string;
    private 'log_base_path'?: string;
    private 'log_bucket'?: string;
    private 'index_prefix'?: string;
    private 'keep_days'?: number;
    private 'target_cluster_id'?: string;
    public constructor(agency?: string, logBasePath?: string, logBucket?: string) { 
        this['agency'] = agency;
        this['log_base_path'] = logBasePath;
        this['log_bucket'] = logBucket;
    }
    public withAgency(agency: string): StartLogsReq {
        this['agency'] = agency;
        return this;
    }
    public withLogBasePath(logBasePath: string): StartLogsReq {
        this['log_base_path'] = logBasePath;
        return this;
    }
    public set logBasePath(logBasePath: string  | undefined) {
        this['log_base_path'] = logBasePath;
    }
    public get logBasePath(): string | undefined {
        return this['log_base_path'];
    }
    public withLogBucket(logBucket: string): StartLogsReq {
        this['log_bucket'] = logBucket;
        return this;
    }
    public set logBucket(logBucket: string  | undefined) {
        this['log_bucket'] = logBucket;
    }
    public get logBucket(): string | undefined {
        return this['log_bucket'];
    }
    public withIndexPrefix(indexPrefix: string): StartLogsReq {
        this['index_prefix'] = indexPrefix;
        return this;
    }
    public set indexPrefix(indexPrefix: string  | undefined) {
        this['index_prefix'] = indexPrefix;
    }
    public get indexPrefix(): string | undefined {
        return this['index_prefix'];
    }
    public withKeepDays(keepDays: number): StartLogsReq {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withTargetClusterId(targetClusterId: string): StartLogsReq {
        this['target_cluster_id'] = targetClusterId;
        return this;
    }
    public set targetClusterId(targetClusterId: string  | undefined) {
        this['target_cluster_id'] = targetClusterId;
    }
    public get targetClusterId(): string | undefined {
        return this['target_cluster_id'];
    }
}