

export class BackupPolicyInfoOption {
    private 'keep_days'?: number;
    private 'start_time'?: string;
    public period?: string;
    private 'differential_period'?: string;
    private 'rate_limit'?: number;
    private 'prefetch_block'?: number;
    private 'file_split_size'?: number;
    private 'enable_standby_backup'?: boolean;
    public constructor(keepDays?: number, startTime?: string, period?: string, differentialPeriod?: string) { 
        this['keep_days'] = keepDays;
        this['start_time'] = startTime;
        this['period'] = period;
        this['differential_period'] = differentialPeriod;
    }
    public withKeepDays(keepDays: number): BackupPolicyInfoOption {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): BackupPolicyInfoOption {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): BackupPolicyInfoOption {
        this['period'] = period;
        return this;
    }
    public withDifferentialPeriod(differentialPeriod: string): BackupPolicyInfoOption {
        this['differential_period'] = differentialPeriod;
        return this;
    }
    public set differentialPeriod(differentialPeriod: string  | undefined) {
        this['differential_period'] = differentialPeriod;
    }
    public get differentialPeriod(): string | undefined {
        return this['differential_period'];
    }
    public withRateLimit(rateLimit: number): BackupPolicyInfoOption {
        this['rate_limit'] = rateLimit;
        return this;
    }
    public set rateLimit(rateLimit: number  | undefined) {
        this['rate_limit'] = rateLimit;
    }
    public get rateLimit(): number | undefined {
        return this['rate_limit'];
    }
    public withPrefetchBlock(prefetchBlock: number): BackupPolicyInfoOption {
        this['prefetch_block'] = prefetchBlock;
        return this;
    }
    public set prefetchBlock(prefetchBlock: number  | undefined) {
        this['prefetch_block'] = prefetchBlock;
    }
    public get prefetchBlock(): number | undefined {
        return this['prefetch_block'];
    }
    public withFileSplitSize(fileSplitSize: number): BackupPolicyInfoOption {
        this['file_split_size'] = fileSplitSize;
        return this;
    }
    public set fileSplitSize(fileSplitSize: number  | undefined) {
        this['file_split_size'] = fileSplitSize;
    }
    public get fileSplitSize(): number | undefined {
        return this['file_split_size'];
    }
    public withEnableStandbyBackup(enableStandbyBackup: boolean): BackupPolicyInfoOption {
        this['enable_standby_backup'] = enableStandbyBackup;
        return this;
    }
    public set enableStandbyBackup(enableStandbyBackup: boolean  | undefined) {
        this['enable_standby_backup'] = enableStandbyBackup;
    }
    public get enableStandbyBackup(): boolean | undefined {
        return this['enable_standby_backup'];
    }
}