

export class BackupPolicyItem {
    private 'keep_days'?: number;
    private 'start_time'?: string;
    public period?: string;
    private 'enable_incremental_backup'?: boolean;
    public constructor(keepDays?: number) { 
        this['keep_days'] = keepDays;
    }
    public withKeepDays(keepDays: number): BackupPolicyItem {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
    public withStartTime(startTime: string): BackupPolicyItem {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withPeriod(period: string): BackupPolicyItem {
        this['period'] = period;
        return this;
    }
    public withEnableIncrementalBackup(enableIncrementalBackup: boolean): BackupPolicyItem {
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