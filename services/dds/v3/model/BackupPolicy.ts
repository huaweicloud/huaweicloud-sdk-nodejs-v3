

export class BackupPolicy {
    private 'keep_days'?: string;
    private 'start_time'?: string;
    public period?: string;
    private 'enable_incremental_backup'?: boolean;
    public constructor() { 
    }
    public withKeepDays(keepDays: string): BackupPolicy {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: string  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): string | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): BackupPolicy {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): BackupPolicy {
        this['period'] = period;
        return this;
    }
    public withEnableIncrementalBackup(enableIncrementalBackup: boolean): BackupPolicy {
        this['enable_incremental_backup'] = enableIncrementalBackup;
        return this;
    }
    public set enableIncrementalBackup(enableIncrementalBackup: boolean  | undefined) {
        this['enable_incremental_backup'] = enableIncrementalBackup;
    }
    public get enableIncrementalBackup(): boolean | undefined {
        return this['enable_incremental_backup'];
    }
}